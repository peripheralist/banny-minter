import ButtonPad from "@/components/shared/ButtonPad";
import Modal from "@/components/shared/Modal";
import Downloadable from "@/components/shared/Downloadable";
import EquippedTiersPreview from "@/components/shared/EquippedTiersPreview";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORIES, Category, CATEGORY_IDS } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import DressBannyContextProvider from "@/contexts/DressBannyContextProvider";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { useOmnichainAdjustTiers } from "@/hooks/writeContract/useOmnichainAdjustTiers";
import { useOmnichainSetProductNames } from "@/hooks/writeContract/useOmnichainSetProductNames";
import { useOmnichainSetSvgHashsOf } from "@/hooks/writeContract/useOmnichainSetSvgHashsOf";
import { TierOrNft } from "@/model/tierOrNft";
import { optimizeSvgsForIpfs } from "@/utils/optimizeSvgsForIpfs";
import { storeFilesToIpfs } from "@/utils/storeFilesToIpfs";
import Image from "next/image";
import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { JB_CHAINS, JBChainId } from "juice-sdk-core";
import { ChainPayment } from "juice-sdk-react";
import { encodeFunctionData, formatEther, parseEther, zeroAddress } from "viem";
import { BAN_HOOK, RESOLVER_ADDRESS } from "@/constants/contracts";

type TierObj = {
  file: File;
  fileUrl?: string;
  upc: number;
  name: string;
  price: string;
  initialSupply: number;
  reserveFrequency: number;
  cid: string | null;
  encodedIpfsUri: string | null;
  category: Category;

  svgHash?: string;
  svg?: string;

  // some properties not exposed to UI
  reserveBeneficiary: `0x${string}`;
  votingUnits: number;
  discountPercent: number;
  cannotIncreaseDiscountPercent: boolean;
  allowOwnerMint: boolean;
  useReserveBeneficiaryAsDefault: boolean;
  transfersPausable: boolean;
  useVotingUnits: boolean;
  cannotBeRemoved: boolean;
};

const PREVIEW_IMG_SIZE = 180;

export default function Index() {
  const { value: tiers, setValue: setTiers } = useLocalStorageState<TierObj[]>(
    "admin_adjust_tiers",
    {
      defaultValue: [],
      parse: (s) => (s ? JSON.parse(s) : []),
      serialize: (v) => JSON.stringify(v),
    }
  );
  const { parsedTiers: allTiers } = useAllTiers();

  const bannyTiers = allTiers?.filter((t) => t.category === "body") ?? [];

  if (!tiers) return null;

  return (
    <DressBannyContextProvider
      availableTiers={[
        ...tiers.map((t) => ({
          ...t,
          tierId: t.upc,
          metadata: {
            productName: t.name,
          },
          reserveQuantity:
            t.reserveFrequency > 0
              ? Math.ceil(t.initialSupply / t.reserveFrequency)
              : 0,
        })),
        ...bannyTiers,
      ]}
    >
      <ToolbarBagView
        disableDrawer
        sections={[
          {
            header: "Store Tiers",
            sectionStyle: {
              flex: 1,
            },
            contentStyle: {
              padding: 24,
            },
            content: <DefineTiersView tiers={tiers} setTiers={setTiers} />,
          },
          {
            header: "Preview",
            sectionStyle: {
              flex: 0,
            },
            contentStyle: {
              padding: 8,
            },
            content: (
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <RoundedFrame background={"white"}>
                  <UploadTiersPreview />
                </RoundedFrame>

                <BodyTiers tiers={bannyTiers} />

                <div style={{ fontSize: FONT_SIZE.sm, padding: "0 12px" }}>
                  <ol>
                    <li>
                      <strong>Upload SVG files.</strong>
                    </li>
                    <li>
                      <strong>Optimize SVGs</strong> (to preview assets only) or{" "}
                      <strong>Optimize + Store on IPFS</strong> (to prepare for
                      adding tiers)
                    </li>
                    <li>
                      <strong>Define info for each tier.</strong> Ensure UPCs
                      are unique!
                    </li>
                    <li>
                      <strong>Store tiers on-chain.</strong> Calls adjustTiers()
                      with tier info
                    </li>
                    <li>
                      <strong>Set SVG hashes.</strong> Calls setSvgHashsOf()
                      with chosen UPCs and hashes of optimized SVGs
                    </li>
                    <li>
                      <strong>Set product names.</strong> Calls
                      setProductNames() with chosen UPCs and names
                    </li>
                  </ol>

                  <p>
                    For best results do not refresh this page after getting
                    started!
                  </p>
                </div>
              </div>
            ),
          },
        ]}
      />
    </DressBannyContextProvider>
  );
}

function DefineTiersView({
  tiers,
  setTiers,
}: {
  tiers: TierObj[];
  setTiers: Dispatch<SetStateAction<TierObj[]>>;
}) {
  const [files, setFiles] = useState<File[] | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isStoringToIpfs, setIsStoringToIpfs] = useState(false);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [jsonInput, setJsonInput] = useState("");

  // Payment index state for each omnichain operation
  const [adjustTiersPaymentIndex, setAdjustTiersPaymentIndex] = useState(0);
  const [svgHashesPaymentIndex, setSvgHashesPaymentIndex] = useState(0);
  const [productNamesPaymentIndex, setProductNamesPaymentIndex] = useState(0);

  const { equip, equipped } = useContext(DressBannyContext);

  // Omnichain Adjust Tiers
  const {
    getQuote: getAdjustTiersQuote,
    resumeQuote: resumeAdjustTiersQuote,
    quoteData: adjustTiersQuoteData,
    isQuoting: isQuotingAdjustTiers,
    signingProgress: adjustTiersSigningProgress,
    hasPendingProgress: hasAdjustTiersPendingProgress,
    sendTransaction: sendAdjustTiersTx,
    isSending: isSendingAdjustTiers,
    isSendSuccess: isAdjustTiersSendSuccess,
    startPolling: startPollingAdjustTiers,
    isPolling: isPollingAdjustTiers,
    isComplete: didAdjustTiers,
    bundleResponse: adjustTiersBundleResponse,
    error: adjustTiersError,
    chains,
  } = useOmnichainAdjustTiers();

  // Omnichain Set SVG Hashes
  const {
    getQuote: getSvgHashesQuote,
    resumeQuote: resumeSvgHashesQuote,
    quoteData: svgHashesQuoteData,
    isQuoting: isQuotingSvgHashes,
    signingProgress: svgHashesSigningProgress,
    hasPendingProgress: hasSvgHashesPendingProgress,
    sendTransaction: sendSvgHashesTx,
    isSending: isSendingSvgHashes,
    isSendSuccess: isSvgHashesSendSuccess,
    startPolling: startPollingSvgHashes,
    isPolling: isPollingSvgHashes,
    isComplete: didSetSvgHashes,
    bundleResponse: svgHashesBundleResponse,
    error: svgHashesError,
  } = useOmnichainSetSvgHashsOf();

  // Omnichain Set Product Names
  const {
    getQuote: getProductNamesQuote,
    resumeQuote: resumeProductNamesQuote,
    quoteData: productNamesQuoteData,
    isQuoting: isQuotingProductNames,
    signingProgress: productNamesSigningProgress,
    hasPendingProgress: hasProductNamesPendingProgress,
    sendTransaction: sendProductNamesTx,
    isSending: isSendingProductNames,
    isSendSuccess: isProductNamesSendSuccess,
    startPolling: startPollingProductNames,
    isPolling: isPollingProductNames,
    isComplete: didSetProductNames,
    bundleResponse: productNamesBundleResponse,
    error: productNamesError,
  } = useOmnichainSetProductNames();

  useEffect(() => {
    if (!files) {
      setTiers([]);
      return;
    }

    const _urls = files.map((f) => URL.createObjectURL(f));

    setTiers(
      files?.map((file, i) => ({
        file,
        name: file.name.split(".")[0],
        fileUrl: _urls[i],

        // set default initial values
        upc: i + 5,
        price: "0",
        initialSupply: 0,
        reserveFrequency: 0,
        cid: null,
        encodedIpfsUri: null,
        category: "body",

        // hidden from UI
        reserveBeneficiary: zeroAddress,
        votingUnits: 0,
        discountPercent: 0,
        cannotIncreaseDiscountPercent: false,
        allowOwnerMint: false,
        useReserveBeneficiaryAsDefault: false,
        transfersPausable: false,
        useVotingUnits: false,
        cannotBeRemoved: false,
      })) ?? []
    );

    return () => _urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files, setTiers]);

  const TierInput = useCallback(
    ({
      property,
      index,
      disabled,
      wad,
    }: {
      property: keyof Omit<TierObj, "file" | "encodedIPFSUri" | "cid">;
      index: number;
      disabled?: boolean;
      wad?: boolean;
    }) => {
      const Label = (
        <label htmlFor={property} style={{ fontSize: FONT_SIZE.sm }}>
          {property}
        </label>
      );

      if (property === "category") {
        return (
          <div>
            {Label}{" "}
            <select
              style={{ width: "100%" }}
              name={property}
              defaultValue={tiers[index]["category"]}
              onChange={(e) =>
                setTiers((_tiers) =>
                  _tiers.map((t, i) =>
                    index === i
                      ? { ...t, category: e.target.value as Category }
                      : t
                  )
                )
              }
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        );
      }

      let type: InputHTMLAttributes<HTMLInputElement>["type"] = "text";
      switch (property) {
        case "initialSupply":
        case "reserveFrequency":
          type = "number";
          break;
      }

      const defaultValue = tiers[index][property];

      if (
        typeof defaultValue !== "string" &&
        typeof defaultValue !== "number"
      ) {
        return null;
      }

      return (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <span>{Label}</span>
            {wad ? (
              <span style={{ fontSize: FONT_SIZE.sm }}>
                ({formatEther(BigInt(defaultValue))} ETH)
              </span>
            ) : null}
          </div>
          <input
            style={{ width: "100%", boxSizing: "border-box" }}
            name={property}
            type={type}
            placeholder={property}
            disabled={disabled}
            defaultValue={defaultValue}
            onBlur={(e) => {
              // onChange re-renders the input, losing focus. so we use onBlur instead
              setTiers((_tiers) =>
                _tiers.map((t, i) =>
                  index === i
                    ? {
                        ...t,
                        [property]: wad
                          ? parseEther(e.target.value).toString()
                          : e.target.value,
                      }
                    : t
                )
              );
            }}
          />
        </div>
      );
    },
    [tiers, setTiers]
  );

  const TierPreviews = useCallback(
    () =>
      tiers?.map((t, i) => {
        const isEquipped = equipped[t.category]?.tierId === t.upc;

        return (
          <RoundedFrame
            containerStyle={{ width: PREVIEW_IMG_SIZE + 16 }}
            style={{ padding: 8 }}
            key={t.fileUrl ?? `tier-${i}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {t.fileUrl ? (
                <Image
                  style={{
                    background: "white",
                    boxSizing: "border-box",
                  }}
                  alt={t.name}
                  width={PREVIEW_IMG_SIZE}
                  height={PREVIEW_IMG_SIZE}
                  src={t.fileUrl}
                />
              ) : (
                <div
                  style={{
                    width: PREVIEW_IMG_SIZE,
                    height: PREVIEW_IMG_SIZE,
                    background: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: FONT_SIZE.sm,
                    color: "#999",
                  }}
                >
                  No preview
                </div>
              )}

              <div
                style={{
                  fontSize: FONT_SIZE.sm,
                  userSelect: "all",
                  overflowWrap: "anywhere",
                }}
              >
                CID: {t.cid || "Not on IPFS"}
              </div>

              {t.svg && (
                <ButtonPad
                  fillFg={isEquipped ? COLORS.pink : undefined}
                  style={{
                    color: isEquipped ? "white" : undefined,
                    padding: "6px 8px",
                    fontSize: FONT_SIZE.sm,
                  }}
                  onClick={() =>
                    equip?.[t.category](isEquipped ? undefined : t.upc)
                  }
                  shadow="none"
                >
                  Preview
                </ButtonPad>
              )}

              <TierInput property="upc" index={i} />
              <TierInput property="name" index={i} />
              <TierInput
                property="category"
                index={i}
                disabled={didAdjustTiers}
              />
              <TierInput
                wad
                property="price"
                index={i}
                disabled={didAdjustTiers}
              />
              <TierInput
                property="initialSupply"
                index={i}
                disabled={didAdjustTiers}
              />
              <TierInput
                property="reserveFrequency"
                index={i}
                disabled={didAdjustTiers}
              />

              {didAdjustTiers ? null : (
                <ButtonPad
                  style={{ padding: "6px 8px", fontSize: FONT_SIZE.sm }}
                  shadow="none"
                  onClick={() => setTiers((t) => t.filter((_, _i) => _i !== i))}
                >
                  Remove
                </ButtonPad>
              )}
            </div>
          </RoundedFrame>
        );
      }),
    [tiers, TierInput, didAdjustTiers, equip, equipped, setTiers]
  );

  const didOptimize = useMemo(
    () => !!tiers.length && tiers.every((t) => !!t.svg),
    [tiers]
  );

  const didStoreIpfs = useMemo(
    () => !!tiers.length && tiers.every((t) => !!t.encodedIpfsUri),
    [tiers]
  );

  const hasSvgHashes = useMemo(
    () => !!tiers.length && tiers.every((t) => !!t.svgHash),
    [tiers]
  );

  const hasNames = useMemo(
    () => !!tiers.length && tiers.every((t) => !!t.name),
    [tiers]
  );

  // Log the adjustTiers calldata for debugging
  useEffect(() => {
    if (!didStoreIpfs || !tiers.length) return;

    const adjustTiersAbi = [
      {
        type: "function",
        name: "adjustTiers",
        inputs: [
          {
            name: "tiersToAdd",
            type: "tuple[]",
            components: [
              { name: "price", type: "uint104" },
              { name: "initialSupply", type: "uint32" },
              { name: "votingUnits", type: "uint32" },
              { name: "reserveFrequency", type: "uint16" },
              { name: "reserveBeneficiary", type: "address" },
              { name: "encodedIPFSUri", type: "bytes32" },
              { name: "category", type: "uint24" },
              { name: "discountPercent", type: "uint8" },
              { name: "allowOwnerMint", type: "bool" },
              { name: "useReserveBeneficiaryAsDefault", type: "bool" },
              { name: "transfersPausable", type: "bool" },
              { name: "useVotingUnits", type: "bool" },
              { name: "cannotBeRemoved", type: "bool" },
              { name: "cannotIncreaseDiscountPercent", type: "bool" },
            ],
          },
          { name: "tierIdsToRemove", type: "uint256[]" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ] as const;

    try {
      const calldata = encodeFunctionData({
        abi: adjustTiersAbi,
        functionName: "adjustTiers",
        args: [
          tiers.map((t) => ({
            price: BigInt(t.price),
            initialSupply: t.initialSupply,
            votingUnits: t.votingUnits,
            reserveFrequency: t.reserveFrequency,
            reserveBeneficiary: t.reserveBeneficiary,
            encodedIPFSUri: t.encodedIpfsUri as `0x${string}`,
            category: CATEGORY_IDS[t.category],
            discountPercent: t.discountPercent,
            allowOwnerMint: t.allowOwnerMint,
            useReserveBeneficiaryAsDefault: t.useReserveBeneficiaryAsDefault,
            transfersPausable: t.transfersPausable,
            useVotingUnits: t.useVotingUnits,
            cannotBeRemoved: t.cannotBeRemoved,
            cannotIncreaseDiscountPercent: t.cannotIncreaseDiscountPercent,
          })),
          [], // tierIdsToRemove
        ],
      });
      console.log("adjustTiers calldata:", { target: BAN_HOOK, calldata });
    } catch (e) {
      console.error("Failed to encode adjustTiers:", e);
    }
  }, [tiers, didStoreIpfs]);

  // Log the setSvgHashsOf calldata for debugging
  useEffect(() => {
    if (!hasSvgHashes || !tiers.length) return;

    const setSvgHashsOfAbi = [
      {
        type: "function",
        name: "setSvgHashsOf",
        inputs: [
          { name: "upcs", type: "uint256[]" },
          { name: "svgHashs", type: "bytes32[]" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ] as const;

    try {
      const calldata = encodeFunctionData({
        abi: setSvgHashsOfAbi,
        functionName: "setSvgHashsOf",
        args: [
          tiers.map((t) => BigInt(t.upc)),
          tiers.map((t) => t.svgHash as `0x${string}`),
        ],
      });
      console.log("setSvgHashsOf calldata:", { target: RESOLVER_ADDRESS, calldata });
    } catch (e) {
      console.error("Failed to encode setSvgHashsOf:", e);
    }
  }, [tiers, hasSvgHashes]);

  // Log the setProductNames calldata for debugging
  useEffect(() => {
    if (!hasNames || !tiers.length) return;

    const setProductNamesAbi = [
      {
        type: "function",
        name: "setProductNames",
        inputs: [
          { name: "upcs", type: "uint256[]" },
          { name: "names", type: "string[]" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ] as const;

    try {
      const calldata = encodeFunctionData({
        abi: setProductNamesAbi,
        functionName: "setProductNames",
        args: [
          tiers.map((t) => BigInt(t.upc)),
          tiers.map((t) => t.name),
        ],
      });
      console.log("setProductNames calldata:", { target: RESOLVER_ADDRESS, calldata });
    } catch (e) {
      console.error("Failed to encode setProductNames:", e);
    }
  }, [tiers, hasNames]);

  const handleJsonImport = useCallback(() => {
    try {
      const parsed = JSON.parse(jsonInput) as TierObj[];
      if (!Array.isArray(parsed)) {
        alert("JSON must be an array of tiers");
        return;
      }

      // Map the JSON data to TierObj, excluding file/fileUrl since those won't work
      const importedTiers: TierObj[] = parsed.map((t, i) => ({
        file: new File([], t.name || `tier-${i}`), // placeholder empty file
        fileUrl: undefined, // blob URLs won't work
        upc: t.upc ?? i + 1,
        name: t.name ?? "",
        price: t.price ?? "0",
        initialSupply: typeof t.initialSupply === "string" ? parseInt(t.initialSupply) : (t.initialSupply ?? 0),
        reserveFrequency: typeof t.reserveFrequency === "string" ? parseInt(t.reserveFrequency) : (t.reserveFrequency ?? 0),
        cid: t.cid ?? null,
        encodedIpfsUri: t.encodedIpfsUri ?? null,
        category: t.category ?? "body",
        svgHash: t.svgHash,
        svg: t.svg,
        reserveBeneficiary: t.reserveBeneficiary ?? zeroAddress,
        votingUnits: t.votingUnits ?? 0,
        discountPercent: t.discountPercent ?? 0,
        cannotIncreaseDiscountPercent: t.cannotIncreaseDiscountPercent ?? false,
        allowOwnerMint: t.allowOwnerMint ?? false,
        useReserveBeneficiaryAsDefault: t.useReserveBeneficiaryAsDefault ?? false,
        transfersPausable: t.transfersPausable ?? false,
        useVotingUnits: t.useVotingUnits ?? false,
        cannotBeRemoved: t.cannotBeRemoved ?? false,
      }));

      setTiers(importedTiers);
      setShowJsonModal(false);
      setJsonInput("");
    } catch (e) {
      alert("Invalid JSON: " + (e instanceof Error ? e.message : "Unknown error"));
    }
  }, [jsonInput, setTiers]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* JSON Import Modal */}
      <Modal
        open={showJsonModal}
        onClose={() => setShowJsonModal(false)}
        action={{ onClick: handleJsonImport, text: "Import" }}
        size="sm"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontWeight: "bold", fontSize: FONT_SIZE.lg }}>
            Import Tiers JSON
          </div>
          <textarea
            style={{
              width: "100%",
              height: 300,
              fontFamily: "monospace",
              fontSize: 12,
              padding: 8,
              boxSizing: "border-box",
            }}
            placeholder="Paste JSON array here..."
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
        </div>
      </Modal>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <input
          type="file"
          accept="image/svg+xml"
          multiple
          onChange={(e) => {
            const files = e.target.files;

            if (!files) {
              setFiles(null);
              return;
            }

            let _files: File[] = [];
            for (let i = 0; i < files.length; i++) {
              const file = files.item(i);
              if (file) _files.push(file);
            }

            setFiles(_files);
          }}
        />
        <ButtonPad
          style={{ padding: "6px 12px", fontSize: FONT_SIZE.sm }}
          onClick={() => setShowJsonModal(true)}
        >
          Import JSON
        </ButtonPad>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, ${PREVIEW_IMG_SIZE}px)`,
          gap: 12,
        }}
      >
        <TierPreviews />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 300,
        }}
      >
        <ButtonPad
          shadow="sm"
          style={{ padding: "8px 12px" }}
          disabled={!files || isOptimizing || didOptimize}
          loading={
            isOptimizing ? { fill: "black", width: 180, height: 16 } : undefined
          }
          onClick={
            files
              ? () => {
                  setIsOptimizing(true);

                  optimizeSvgsForIpfs(files)
                    .then((stored) => {
                      setIsOptimizing(false);

                      setTiers((_tiers) =>
                        _tiers.map((t, i) => ({
                          ...t,
                          svgHash: stored[i].svgHash,
                          svg: stored[i].svgContents,
                        }))
                      );
                    })
                    .catch((e) => {
                      setIsOptimizing(false);
                    });
                }
              : undefined
          }
        >
          Optimize SVGs
        </ButtonPad>

        <ButtonPad
          shadow="sm"
          style={{ padding: "8px 12px" }}
          disabled={!files || isStoringToIpfs || didStoreIpfs}
          loading={
            isStoringToIpfs
              ? { fill: "black", width: 180, height: 16 }
              : undefined
          }
          onClick={
            files
              ? () => {
                  setIsStoringToIpfs(true);

                  storeFilesToIpfs(files)
                    .then((stored) => {
                      setIsStoringToIpfs(false);

                      setTiers((_tiers) =>
                        _tiers.map((t, i) => ({
                          ...t,
                          cid: stored[i].cid,
                          encodedIpfsUri: stored[i].encodedCid,
                          svgHash: stored[i].svgHash,
                          svg: stored[i].svgContents,
                        }))
                      );
                    })
                    .catch((e) => {
                      setIsStoringToIpfs(false);
                    });
                }
              : undefined
          }
        >
          Optimize + Store on IPFS
        </ButtonPad>

        {/* Omnichain Adjust Tiers Flow */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: 12,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        >
          <div style={{ fontSize: FONT_SIZE.sm, fontWeight: "bold" }}>
            Adjust Tiers (All {chains.length} Chains)
          </div>

          {/* Step 1: Adjust tiers */}
          {!adjustTiersQuoteData && !didAdjustTiers && (
            <>
              {/* Show resume button if there's pending signing progress */}
              {hasAdjustTiersPendingProgress && (
                <ButtonPad
                  shadow="sm"
                  style={{ padding: "8px 12px", marginBottom: 8 }}
                  fillFg={COLORS.pink}
                  onClick={() => resumeAdjustTiersQuote()}
                >
                  Resume Signing
                </ButtonPad>
              )}

              {/* Show signing progress */}
              {adjustTiersSigningProgress && (
                <div style={{ fontSize: FONT_SIZE.sm, marginBottom: 8 }}>
                  Signing: {adjustTiersSigningProgress.signedChains}/
                  {adjustTiersSigningProgress.totalChains} chains
                  {adjustTiersSigningProgress.currentChain && (
                    <span>
                      {" "}
                      (current:{" "}
                      {JB_CHAINS[adjustTiersSigningProgress.currentChain as JBChainId]?.name ??
                        adjustTiersSigningProgress.currentChain}
                      )
                    </span>
                  )}
                </div>
              )}

              <ButtonPad
                shadow="sm"
                style={{ padding: "8px 12px" }}
                disabled={!didStoreIpfs || isQuotingAdjustTiers}
                loading={
                  isQuotingAdjustTiers
                    ? { fill: "black", width: 180, height: 16 }
                    : undefined
                }
                onClick={
                  didStoreIpfs
                    ? () =>
                        getAdjustTiersQuote({
                          tiersToAdd: tiers.map((t) => ({
                            ...t,
                            category: CATEGORY_IDS[t.category],
                            encodedIpfsUri: t.encodedIpfsUri!,
                          })),
                          tierIdsToRemove: [],
                        })
                    : undefined
                }
              >
                Get Quote
              </ButtonPad>
            </>
          )}

          {/* Step 2: Select Payment & Send */}
          {adjustTiersQuoteData &&
            !isAdjustTiersSendSuccess &&
            !didAdjustTiers && (
              <>
                <div style={{ fontSize: FONT_SIZE.sm }}>
                  Select payment chain:
                </div>
                <select
                  style={{ padding: 8, width: "100%" }}
                  value={adjustTiersPaymentIndex}
                  onChange={(e) =>
                    setAdjustTiersPaymentIndex(Number(e.target.value))
                  }
                >
                  {(adjustTiersQuoteData.payment_info as ChainPayment[]).map(
                    (payment, index) => (
                      <option key={payment.chain} value={index}>
                        {formatEther(BigInt(payment.amount))} ETH on{" "}
                        {JB_CHAINS[payment.chain as JBChainId]?.name ??
                          `Chain ${payment.chain}`}
                      </option>
                    )
                  )}
                </select>
                <ButtonPad
                  shadow="sm"
                  style={{ padding: "8px 12px" }}
                  fillFg={COLORS.pink}
                  disabled={isSendingAdjustTiers}
                  loading={
                    isSendingAdjustTiers
                      ? { fill: "white", width: 180, height: 16 }
                      : undefined
                  }
                  onClick={async () => {
                    try {
                      await sendAdjustTiersTx(
                        adjustTiersQuoteData.payment_info[
                          adjustTiersPaymentIndex
                        ]
                      );
                      startPollingAdjustTiers(adjustTiersQuoteData.bundle_uuid);
                    } catch (e) {
                      console.error("Failed to send:", e);
                    }
                  }}
                >
                  <span style={{ color: "white" }}>Pay & Deploy</span>
                </ButtonPad>
              </>
            )}

          {/* Step 3: Bundle Status */}
          {(isPollingAdjustTiers || didAdjustTiers) &&
            adjustTiersBundleResponse && (
              <div
                style={{
                  fontSize: FONT_SIZE.sm,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  {didAdjustTiers ? "Complete!" : "Pending..."}
                </div>
                {adjustTiersBundleResponse.transactions?.map((txn) => (
                  <div
                    key={txn.tx_uuid}
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <span>
                      {JB_CHAINS[txn.request.chain as JBChainId]?.name ??
                        `Chain ${txn.request.chain}`}
                      :
                    </span>
                    <span
                      style={{
                        color:
                          txn.status?.state === "Success"
                            ? "green"
                            : txn.status?.state === "Failed"
                            ? "red"
                            : "orange",
                      }}
                    >
                      {txn.status?.state ?? "Pending"}
                    </span>
                    {txn.status?.state === "Success" &&
                      "hash" in (txn.status.data ?? {}) && (
                        <a
                          href={`${
                            JB_CHAINS[txn.request.chain as JBChainId]?.chain
                              ?.blockExplorers?.default?.url
                          }/tx/${(txn.status.data as { hash: string }).hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: COLORS.blue400 }}
                        >
                          View
                        </a>
                      )}
                  </div>
                ))}
              </div>
            )}

          {/* Error display */}
          {adjustTiersError && (
            <div style={{ color: "red", fontSize: FONT_SIZE.sm }}>
              Error: {adjustTiersError.message}
            </div>
          )}

          {/* Already complete */}
          {didAdjustTiers && !adjustTiersBundleResponse && (
            <div style={{ color: "green", fontSize: FONT_SIZE.sm }}>
              ✅ Tiers adjusted on all chains
            </div>
          )}
        </div>

        {/* Omnichain Set SVG Hashes */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: 12,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        >
          <div style={{ fontSize: FONT_SIZE.sm, fontWeight: "bold" }}>
            Set SVG Hashes (All {chains.length} Chains)
          </div>

          {!svgHashesQuoteData && !didSetSvgHashes && (
            <ButtonPad
              shadow="sm"
              style={{ padding: "8px 12px" }}
              disabled={!didAdjustTiers || !hasSvgHashes || isQuotingSvgHashes}
              loading={
                isQuotingSvgHashes
                  ? { fill: "black", width: 180, height: 16 }
                  : undefined
              }
              onClick={
                didAdjustTiers && hasSvgHashes
                  ? () =>
                      getSvgHashesQuote({
                        upcs: tiers.map((t) => t.upc.toString()),
                        svgHashs: tiers.map((t) => t.svgHash!),
                      })
                  : undefined
              }
            >
              Get Quote
            </ButtonPad>
          )}

          {svgHashesQuoteData &&
            !isSvgHashesSendSuccess &&
            !didSetSvgHashes && (
              <>
                <select
                  style={{ padding: 8, width: "100%" }}
                  value={svgHashesPaymentIndex}
                  onChange={(e) =>
                    setSvgHashesPaymentIndex(Number(e.target.value))
                  }
                >
                  {(svgHashesQuoteData.payment_info as ChainPayment[]).map(
                    (payment, index) => (
                      <option key={payment.chain} value={index}>
                        {formatEther(BigInt(payment.amount))} ETH on{" "}
                        {JB_CHAINS[payment.chain as JBChainId]?.name ??
                          `Chain ${payment.chain}`}
                      </option>
                    )
                  )}
                </select>
                <ButtonPad
                  shadow="sm"
                  style={{ padding: "8px 12px" }}
                  fillFg={COLORS.pink}
                  disabled={isSendingSvgHashes}
                  loading={
                    isSendingSvgHashes
                      ? { fill: "white", width: 180, height: 16 }
                      : undefined
                  }
                  onClick={async () => {
                    try {
                      await sendSvgHashesTx(
                        svgHashesQuoteData.payment_info[svgHashesPaymentIndex]
                      );
                      startPollingSvgHashes(svgHashesQuoteData.bundle_uuid);
                    } catch (e) {
                      console.error("Failed to send:", e);
                    }
                  }}
                >
                  <span style={{ color: "white" }}>Pay & Deploy</span>
                </ButtonPad>
              </>
            )}

          {(isPollingSvgHashes || didSetSvgHashes) &&
            svgHashesBundleResponse && (
              <div style={{ fontSize: FONT_SIZE.sm }}>
                <div style={{ fontWeight: "bold" }}>
                  {didSetSvgHashes ? "Complete!" : "Pending..."}
                </div>
                {svgHashesBundleResponse.transactions?.map((txn) => (
                  <div key={txn.tx_uuid} style={{ display: "flex", gap: 8 }}>
                    <span>
                      {JB_CHAINS[txn.request.chain as JBChainId]?.name}:
                    </span>
                    <span
                      style={{
                        color:
                          txn.status?.state === "Success" ? "green" : "orange",
                      }}
                    >
                      {txn.status?.state ?? "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            )}

          {svgHashesError && (
            <div style={{ color: "red", fontSize: FONT_SIZE.sm }}>
              Error: {svgHashesError.message}
            </div>
          )}

          {didSetSvgHashes && !svgHashesBundleResponse && (
            <div style={{ color: "green", fontSize: FONT_SIZE.sm }}>
              ✅ SVG hashes set on all chains
            </div>
          )}
        </div>

        {/* Omnichain Set Product Names */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: 12,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        >
          <div style={{ fontSize: FONT_SIZE.sm, fontWeight: "bold" }}>
            Set Product Names (All {chains.length} Chains)
          </div>

          {!productNamesQuoteData && !didSetProductNames && (
            <ButtonPad
              shadow="sm"
              style={{ padding: "8px 12px" }}
              disabled={!didAdjustTiers || !hasNames || isQuotingProductNames}
              loading={
                isQuotingProductNames
                  ? { fill: "black", width: 180, height: 16 }
                  : undefined
              }
              onClick={
                didAdjustTiers && hasNames
                  ? () =>
                      getProductNamesQuote({
                        upcs: tiers.map((t) => t.upc.toString()),
                        names: tiers.map((t) => t.name),
                      })
                  : undefined
              }
            >
              Get Quote
            </ButtonPad>
          )}

          {productNamesQuoteData &&
            !isProductNamesSendSuccess &&
            !didSetProductNames && (
              <>
                <select
                  style={{ padding: 8, width: "100%" }}
                  value={productNamesPaymentIndex}
                  onChange={(e) =>
                    setProductNamesPaymentIndex(Number(e.target.value))
                  }
                >
                  {(productNamesQuoteData.payment_info as ChainPayment[]).map(
                    (payment, index) => (
                      <option key={payment.chain} value={index}>
                        {formatEther(BigInt(payment.amount))} ETH on{" "}
                        {JB_CHAINS[payment.chain as JBChainId]?.name ??
                          `Chain ${payment.chain}`}
                      </option>
                    )
                  )}
                </select>
                <ButtonPad
                  shadow="sm"
                  style={{ padding: "8px 12px" }}
                  fillFg={COLORS.pink}
                  disabled={isSendingProductNames}
                  loading={
                    isSendingProductNames
                      ? { fill: "white", width: 180, height: 16 }
                      : undefined
                  }
                  onClick={async () => {
                    try {
                      await sendProductNamesTx(
                        productNamesQuoteData.payment_info[
                          productNamesPaymentIndex
                        ]
                      );
                      startPollingProductNames(
                        productNamesQuoteData.bundle_uuid
                      );
                    } catch (e) {
                      console.error("Failed to send:", e);
                    }
                  }}
                >
                  <span style={{ color: "white" }}>Pay & Deploy</span>
                </ButtonPad>
              </>
            )}

          {(isPollingProductNames || didSetProductNames) &&
            productNamesBundleResponse && (
              <div style={{ fontSize: FONT_SIZE.sm }}>
                <div style={{ fontWeight: "bold" }}>
                  {didSetProductNames ? "Complete!" : "Pending..."}
                </div>
                {productNamesBundleResponse.transactions?.map((txn) => (
                  <div key={txn.tx_uuid} style={{ display: "flex", gap: 8 }}>
                    <span>
                      {JB_CHAINS[txn.request.chain as JBChainId]?.name}:
                    </span>
                    <span
                      style={{
                        color:
                          txn.status?.state === "Success" ? "green" : "orange",
                      }}
                    >
                      {txn.status?.state ?? "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            )}

          {productNamesError && (
            <div style={{ color: "red", fontSize: FONT_SIZE.sm }}>
              Error: {productNamesError.message}
            </div>
          )}

          {didSetProductNames && !productNamesBundleResponse && (
            <div style={{ color: "green", fontSize: FONT_SIZE.sm }}>
              ✅ Product names set on all chains
            </div>
          )}
        </div>

        {tiers.length > 0 && (
          <div style={{ marginTop: 40 }}>
            <Downloadable
              downloadText="Download tiers data"
              downloadHref={`data:application/json;base64,${btoa(
                JSON.stringify(tiers, null, 2)
              )}`}
              fileName={`banny-tiers-${new Date().valueOf()}.json`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function UploadTiersPreview() {
  const { equipped, equippingCategory, unequippingCategory } =
    useContext(DressBannyContext);

  return (
    <EquippedTiersPreview
      equipped={equipped}
      equippingCategory={equippingCategory}
      unequippingCategory={unequippingCategory}
      size={400}
    />
  );
}

function BodyTiers({ tiers }: { tiers: TierOrNft[] }) {
  const { equip, equipped } = useContext(DressBannyContext);

  const size = 64;

  return (
    <div style={{ display: "flex", gap: 4 }}>
      {tiers.map((t) => (
        <RoundedFrame
          key={t.tierId}
          onClick={() => equip?.body(t.tierId)}
          borderColor={
            equipped["body"]?.tierId === t.tierId ? COLORS.pink : undefined
          }
          background={"white"}
          style={{ padding: 4 }}
          containerStyle={{ width: size + 8 }}
        >
          <TierImage tier={t} size={size} />
        </RoundedFrame>
      ))}
    </div>
  );
}

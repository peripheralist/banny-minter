import ButtonPad from "@/components/shared/ButtonPad";
import Downloadable from "@/components/shared/Downloadable";
import EquippedTiersPreview from "@/components/shared/EquippedTiersPreview";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORIES, Category, CATEGORY_IDS } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import DressBannyContextProvider from "@/contexts/DressBannyContextProvider";
import { useSetProductNames } from "@/hooks/writeContract/setProductNames";
import { useSetSvgHashsOf } from "@/hooks/writeContract/setSvgHashsOf";
import { useAdjustTiers } from "@/hooks/writeContract/useAdjustTiers";
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
import { zeroAddress } from "viem";

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
  const [tiers, setTiers] = useState<TierObj[]>([]);

  return (
    <DressBannyContextProvider
      availableTiers={tiers.map((t) => ({
        ...t,
        tierId: t.upc,
        metadata: {
          productName: t.name,
        },
        reserveQuantity:
          t.reserveFrequency > 0
            ? Math.ceil(t.initialSupply / t.reserveFrequency)
            : 0,
      }))}
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
              <div>
                <RoundedFrame background={"white"}>
                  <UploadTiersPreview />
                </RoundedFrame>

                <div style={{ fontSize: FONT_SIZE.sm, padding: "0 12px" }}>
                  <ol>
                    <li>
                      <strong>Upload SVG files.</strong>
                    </li>
                    <li>
                      <strong>Optimize SVGs</strong> (to preview assets only) or{" "}
                      <strong>Store all files on IPFS</strong> (to prepare for
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
  const [didAdjustTiers, setDidAdjustTiers] = useState(false);

  const { equip, equipped } = useContext(DressBannyContext);

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
        upc: i + 1,
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
    }: {
      property: keyof Omit<TierObj, "file" | "encodedIPFSUri" | "cid">;
      index: number;
      disabled?: boolean;
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
          {Label}{" "}
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
                  index === i ? { ...t, [property]: e.target.value } : t
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
            key={t.fileUrl}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Image
                style={{
                  background: "white",
                  boxSizing: "border-box",
                }}
                alt={t.name}
                width={PREVIEW_IMG_SIZE}
                height={PREVIEW_IMG_SIZE}
                src={t.fileUrl ?? "broken"}
              />

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
              <TierInput property="price" index={i} disabled={didAdjustTiers} />
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

  const { adjustTiers, isPending: isAdjustingTiers } = useAdjustTiers({
    onSuccess: () => setDidAdjustTiers(true),
  });
  const { setSvgHashsOf, isPending: isSettingSvgHashsOf } = useSetSvgHashsOf();
  const { setProductNames, isPending: isSettingProductNames } =
    useSetProductNames();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
                          encodedIPFSUri: stored[i].encodedCid,
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

        <ButtonPad
          shadow="sm"
          style={{ padding: "8px 12px" }}
          disabled={!didStoreIpfs || didAdjustTiers}
          loading={
            isAdjustingTiers
              ? { fill: "black", width: 180, height: 16 }
              : undefined
          }
          onClick={
            didStoreIpfs
              ? () =>
                  adjustTiers({
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
          Adjust Tiers
        </ButtonPad>

        <ButtonPad
          shadow="sm"
          style={{ padding: "8px 12px" }}
          disabled={!didAdjustTiers || !hasSvgHashes}
          loading={
            isSettingSvgHashsOf
              ? { fill: "black", width: 180, height: 16 }
              : undefined
          }
          onClick={
            didAdjustTiers && hasSvgHashes
              ? () =>
                  setSvgHashsOf({
                    upcs: tiers.map((t) => t.upc.toString()),
                    svgHashs: tiers.map((t) => t.svgHash!),
                  })
              : undefined
          }
        >
          Set SVG Hashes
        </ButtonPad>

        <ButtonPad
          shadow="sm"
          style={{ padding: "8px 12px" }}
          disabled={!didAdjustTiers || !hasNames}
          loading={
            isSettingProductNames
              ? { fill: "black", width: 180, height: 16 }
              : undefined
          }
          onClick={
            didAdjustTiers && hasNames
              ? () =>
                  setProductNames({
                    upcs: tiers.map((t) => t.upc.toString()),
                    names: tiers.map((t) => t.name),
                  })
              : undefined
          }
        >
          Set Product Names
        </ButtonPad>

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

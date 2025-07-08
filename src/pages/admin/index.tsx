import ButtonPad from "@/components/shared/ButtonPad";
import Downloadable from "@/components/shared/Downloadable";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS } from "@/constants/category";
import { FONT_SIZE } from "@/constants/fontSize";
import { useSetProductNames } from "@/hooks/writeContract/setProductNames";
import { useSetSvgHashsOf } from "@/hooks/writeContract/setSvgHashsOf";
import { useAdjustTiers } from "@/hooks/writeContract/useAdjustTiers";
import { storeFilesToIpfs } from "@/utils/storeFilesToIpfs";
import Image from "next/image";
import {
  InputHTMLAttributes,
  useCallback,
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
  encodedIPFSUri: string | null;
  category: number;

  svgHash?: string;

  // some properties not exposed to UI
  // reserveBeneficiary: address(0);
  // votingUnits: 0;
  // discountPercent: 0;
  // cannotIncreaseDiscountPercent: false;
  // allowOwnerMint: false;
  // useReserveBeneficiaryAsDefault: false;
  // transfersPausable: false;
  // useVotingUnits: false;
  // cannotBeRemoved: false;
};

const PREVIEW_IMG_SIZE = 200;

export default function Index() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [isStoringToIpfs, setIsStoringToIpfs] = useState(false);
  const [ipfsStoringProgress, setIpfsStoringProgress] = useState(0);
  const [didAdjustTiers, setDidAdjustTiers] = useState(false);
  const [tiers, setTiers] = useState<TierObj[]>([]);

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
        upc: i,
        price: "0",
        initialSupply: 0,
        reserveFrequency: 0,
        cid: null,
        encodedIPFSUri: null,
        category: 0,
      })) ?? []
    );

    return () => _urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

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
              value={tiers[index]["category"]}
              onChange={(e) =>
                setTiers((_tiers) =>
                  _tiers.map((t, i) =>
                    index === i
                      ? { ...t, category: parseInt(e.target.value) }
                      : t
                  )
                )
              }
            >
              {Object.entries(CATEGORY_IDS).map(([label, value]) => (
                <option key={value} value={value}>
                  {label} ({value})
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

      return (
        <div>
          {Label}{" "}
          <input
            style={{ width: "100%", boxSizing: "border-box" }}
            name={property}
            type={type}
            placeholder={property}
            disabled={disabled}
            defaultValue={tiers[index][property]}
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
    [tiers]
  );

  const TierPreviews = useCallback(
    () =>
      tiers?.map((t, i) => {
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
              {t.fileUrl ? (
                <Image
                  style={{ background: "white", boxSizing: "border-box" }}
                  alt={t.name}
                  width={PREVIEW_IMG_SIZE}
                  height={PREVIEW_IMG_SIZE}
                  src={t.fileUrl}
                />
              ) : (
                t.name
              )}

              <div
                style={{
                  fontSize: FONT_SIZE.sm,
                  userSelect: "all",
                  overflowWrap: "anywhere",
                }}
              >
                CID: {t.cid || "Not stored on IPFS"}
              </div>

              {t.cid && (
                <>
                  <TierInput property="upc" index={i} />
                  <TierInput property="name" index={i} />
                  <TierInput
                    property="category"
                    index={i}
                    disabled={didAdjustTiers}
                  />
                  <TierInput
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
                </>
              )}

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
    [tiers, TierInput, didAdjustTiers]
  );

  const didStoreIpfs = useMemo(
    () => !!tiers.length && tiers.every((t) => !!t.encodedIPFSUri),
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
    <ToolbarBagView
      disableDrawer
      sections={[
        {
          header: "Store Tiers",
          contentStyle: {
            padding: 24,
          },
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ fontSize: FONT_SIZE.sm }}>
                <ol>
                  <li>
                    <strong>Upload SVG files.</strong>
                  </li>
                  <li>
                    <strong>Store all files on IPFS.</strong> Uses optimized
                    SVGs with {`<svg>`} wrapper stripped
                  </li>
                  <li>
                    <strong>Define info for each tier.</strong> Ensure UPCs are
                    unique!
                  </li>
                  <li>
                    <strong>Store tiers on-chain.</strong> Calls adjustTiers()
                    with tier info
                  </li>
                  <li>
                    <strong>Set SVG hashes.</strong> Calls setSvgHashsOf() with
                    chosen UPCs and hashes of optimized SVGs
                  </li>
                  <li>
                    <strong>Set product names.</strong> Calls setProductNames()
                    with chosen UPCs and names
                  </li>
                </ol>

                <p>For best results do not refresh this page after getting started!</p>
              </div>

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
                  gap: 20,
                }}
              >
                <TierPreviews />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  maxWidth: 240,
                }}
              >
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

                          storeFilesToIpfs(files, setIpfsStoringProgress)
                            .then((stored) => {
                              setIsStoringToIpfs(false);

                              setTiers((_tiers) =>
                                _tiers.map((t, i) => ({
                                  ...t,
                                  cid: stored[i].cid,
                                  encodedIPFSUri: stored[i].encodedCid,
                                }))
                              );
                            })
                            .catch((e) => {
                              setIpfsStoringProgress(0);
                              setIsStoringToIpfs(false);
                            });
                        }
                      : undefined
                  }
                >
                  {isStoringToIpfs
                    ? `${ipfsStoringProgress}/${tiers.length}`
                    : "Store on IPFS"}
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
                              encodedIPFSUri: t.encodedIPFSUri!,
                              reserveBeneficiary: zeroAddress,
                              votingUnits: 0,
                              discountPercent: 0,
                              cannotIncreaseDiscountPercent: false,
                              allowOwnerMint: false,
                              useReserveBeneficiaryAsDefault: false,
                              transfersPausable: false,
                              useVotingUnits: false,
                              cannotBeRemoved: false,
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
                      downloadText="Download"
                      downloadHref={JSON.stringify(tiers, null, 2)}
                      fileName={`banny-tiers-${new Date().valueOf()}.json`}
                    />
                  </div>
                )}
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}

import { useConnect } from "wagmi";
import ButtonPad from "./shared/ButtonPad";
import Image from "next/image";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  console.log({ connectors });

  return connectors
    .filter((c) => c.id !== "injected")
    .map((connector) => (
      <ButtonPad key={connector.uid} onClick={() => connect({ connector })}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, padding: 8 }}
        >
          {connector.icon && (
            <Image
              src={connector.icon}
              width={24}
              height={24}
              alt={connector.name}
            />
          )}
          {connector.name}
        </div>
      </ButtonPad>
    ));
}

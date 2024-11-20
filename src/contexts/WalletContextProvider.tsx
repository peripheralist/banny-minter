import ButtonPad from "@/components/shared/ButtonPad";
import Modal from "@/components/shared/Modal";
import { PropsWithChildren, useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { WalletContext } from "./walletContext";

export default function WalletContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useAccount();

  useEffect(() => {
    // close modal once connected
    if (address) {
      setIsOpen(false);
    }
  }, [address]);

  return (
    <WalletContext.Provider
      value={{
        connect: () => setIsOpen(true),
      }}
    >
      {children}

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2 style={{ marginBottom: 24 }}>Select wallet</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <WalletOptions />
        </div>
      </Modal>
    </WalletContext.Provider>
  );
}

function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <ButtonPad
      key={connector.id}
      style={{ height: 44, padding: "8px 12px" }}
      shadow="sm"
      onClick={() => connect({ connector })}
    >
      {connector.name}
    </ButtonPad>
  ));
}

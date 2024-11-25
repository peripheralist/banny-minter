import ButtonPad from "@/components/shared/ButtonPad";
import Modal from "@/components/shared/Modal";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
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

  const onClose = useCallback(() => setIsOpen(false), []);

  return (
    <WalletContext.Provider
      value={{
        connect: () => setIsOpen(true),
      }}
    >
      {children}

      <Modal open={isOpen} onClose={onClose}>
        <h2 style={{ marginBottom: 24 }}>Select wallet</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <WalletOptions onClose={onClose} />
        </div>
      </Modal>
    </WalletContext.Provider>
  );
}

function WalletOptions({ onClose }: { onClose?: VoidFunction }) {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <ButtonPad
      key={connector.id}
      style={{ padding: "8px 12px" }}
      shadow="sm"
      onClick={() => {
        connect({ connector });
        onClose?.();
      }}
    >
      {connector.name}
    </ButtonPad>
  ));
}

import ButtonPad from "@/components/shared/ButtonPad";
import Modal from "@/components/shared/Modal";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAppChain } from "@/hooks/useAppChain";
import { Chain } from "@/model/chain";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { useAccount, useConnect, useSwitchChain } from "wagmi";
import { config } from "../../config.wagmi";
import { WalletContext } from "./walletContext";

export default function WalletContextProvider({ children }: PropsWithChildren) {
  const [connectModalIsOpen, setConnectModalIsOpen] = useState(false);
  const [networksModalIsOpen, setNetworksModalIsOpen] = useState(false);
  const { address, chain: walletChain } = useAccount();

  useEffect(() => {
    // close modal once connected
    if (address) {
      setConnectModalIsOpen(false);
    }
  }, [address]);

  return (
    <WalletContext.Provider
      value={{
        connect: () => setConnectModalIsOpen(true),
        switchChain: () => setNetworksModalIsOpen(true),
        wrongNetwork: address && !walletChain,
      }}
    >
      {children}

      <ConnectModal
        open={connectModalIsOpen}
        onClose={() => setConnectModalIsOpen(false)}
      />

      <NetworkModal
        open={networksModalIsOpen}
        onClose={() => setNetworksModalIsOpen(false)}
      />
    </WalletContext.Provider>
  );
}

function ConnectModal({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const { connectors, connect } = useConnect();
  const { switchChain } = useSwitchChain();
  const appChain = useAppChain();

  return (
    <Modal open={open} onClose={onClose}>
      <h2
        style={{
          marginBottom: 24,
          fontSize: FONT_SIZE["2xl"],
          textAlign: "center",
        }}
      >
        Choose your wallet
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        {connectors.toReversed().map((connector) => (
          <ButtonPad
            key={connector.id}
            style={{ padding: "8px 12px" }}
            shadow="sm"
            onClick={() => {
              connect(
                { connector },
                { onSuccess: () => switchChain({ chainId: appChain.id }) }
              );
              onClose?.();
            }}
          >
            {connector.name}
          </ButtonPad>
        ))}
      </div>
    </Modal>
  );
}

function NetworkModal({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const { switchChain } = useSwitchChain();
  const { address, chain: walletChain } = useAccount();

  const [mainchains, testnets] = [
    config.chains.filter((c) => !c.testnet),
    config.chains.filter((c) => c.testnet),
  ];

  const ChainName = useCallback(
    ({ chain }: { chain: Chain }) => {
      const active = chain.id === walletChain?.id;

      return (
        <RoundedFrame
          background={active ? COLORS.pinkLite : "white"}
          borderColor={active ? COLORS.pink : undefined}
          style={{
            ...(active ? { color: COLORS.pink } : { color: "black" }),
            cursor: address ? "pointer" : "default",
            whiteSpace: "pre",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: 12,
          }}
          onClick={() => {
            if (!address) return;

            switchChain({ chainId: chain.id });
            onClose?.();
          }}
        >
          {chain.name}
        </RoundedFrame>
      );
    },
    [walletChain, switchChain, address, onClose]
  );

  return (
    <Modal open={open} onClose={onClose}>
      <h1>Banny is multichain!</h1>
      <p>
        {address
          ? "Choose a network to use below."
          : "Connect a wallet to switch networks."}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: 24,
        }}
      >
        {mainchains.map((c) => (
          <ChainName key={c.id} chain={c} />
        ))}
        <br />
        <div
          style={{
            fontSize: FONT_SIZE.xs,
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          Testnets
        </div>
        {testnets.map((c) => (
          <ChainName key={c.id} chain={c} />
        ))}
      </div>
    </Modal>
  );
}

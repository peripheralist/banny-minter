import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { WalletContext } from "@/contexts/walletContext";
import { useCallback, useContext, useState } from "react";
import { useAccount, useDisconnect, useEnsName, useSwitchChain } from "wagmi";
import ButtonPad from "../shared/ButtonPad";
import FormattedAddress from "../shared/FormattedAddress";
import RoundedFrame from "../shared/RoundedFrame";
import { config } from "../../../config.wagmi";
import { Chain } from "@/model/chain";
import { useChain } from "@/hooks/useChain";
import Blinker from "../shared/Blinker";
import Modal from "../shared/Modal";

export default function Wallet() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { connect } = useContext(WalletContext);

  const { address, chain: walletChain } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const activeChain = useChain();
  const { switchChain } = useSwitchChain();

  const [mainchains, testnets] = [
    config.chains.filter((c) => !c.testnet),
    config.chains.filter((c) => c.testnet),
  ];

  const ChainName = useCallback(
    ({ chain }: { chain: Chain }) => {
      const active = chain.id === activeChain.id;

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
            setModalIsOpen(false);
          }}
        >
          {chain.name}
        </RoundedFrame>
      );
    },
    [activeChain, switchChain, address]
  );

  return (
    <div>
      <div>
        <RoundedFrame
          background={COLORS.pinkLite}
          borderColor={COLORS.pink}
          containerStyle={{ paddingBottom: 12, marginBottom: -20 }}
        >
          <div
            style={{
              color: COLORS.pink,
              padding: 8,
              textAlign: "center",
              fontSize: FONT_SIZE.sm,
              overflow: "hidden",
              textOverflow: "ellipsis",
              cursor: "pointer",
            }}
            onClick={() => setModalIsOpen(true)}
          >
            {activeChain.name}
          </div>
        </RoundedFrame>
      </div>

      <div>
        <RoundedFrame background={COLORS.banana100} style={{ padding: 12 }}>
          {address ? (
            <>
              <div
                style={{
                  fontSize: FONT_SIZE.sm,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "center",
                  marginTop: 4,
                  marginBottom: 12,
                }}
              >
                {ensName ?? <FormattedAddress address={address} />}
              </div>

              <ButtonPad
                onClick={() => disconnect()}
                style={{
                  padding: 12,
                  color: "black",
                  fontSize: FONT_SIZE.sm,
                }}
                containerStyle={{ margin: -4 }}
                shadow="none"
                dimension
              >
                Disconnect
              </ButtonPad>
            </>
          ) : (
            <ButtonPad
              style={{
                padding: 12,
                color: "white",
                textTransform: "uppercase",
              }}
              shadow="sm"
              fillFg={COLORS.pink}
              onClick={connect}
              dimension
            >
              Connect
            </ButtonPad>
          )}
        </RoundedFrame>
      </div>

      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
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
    </div>
  );
}

function Networks() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { address, chain: walletChain } = useAccount();
  const activeChain = useChain();
  const { switchChain } = useSwitchChain();

  const [mainchains, testnets] = [
    config.chains.filter((c) => !c.testnet),
    config.chains.filter((c) => c.testnet),
  ];

  const ChainName = useCallback(
    ({ chain }: { chain: Chain }) => {
      const active = chain.id === activeChain.id;

      return (
        <RoundedFrame
          background={active ? COLORS.pinkLite : "white"}
          borderColor={active ? COLORS.pink : undefined}
          style={{
            ...(active ? { color: COLORS.pink } : { color: "black" }),
            cursor: "pointer",
            whiteSpace: "pre",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: 12,
          }}
          onClick={() => {
            switchChain({ chainId: chain.id });
            setModalIsOpen(false);
          }}
        >
          {chain.name}
        </RoundedFrame>
      );
    },
    [activeChain, switchChain]
  );

  return (
    <div style={{ margin: -4 }}>
      <RoundedFrame
        style={{
          padding: 12,
          color: COLORS.pink,
          cursor: "pointer",
          fontSize: FONT_SIZE.sm,
          textAlign: "center",
        }}
        background={COLORS.pinkLite}
        borderColor={COLORS.pink}
        onClick={() => setModalIsOpen(true)}
      >
        {activeChain.name}
      </RoundedFrame>

      {address && !walletChain && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#f42",
            fontWeight: "bold",
            fontSize: FONT_SIZE.xs,
            marginTop: 8,
          }}
        >
          <Blinker offColor={"#f42"} /> Wallet using wrong network
        </div>
      )}

      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h1>Banny is multichain!</h1>
        <p>Choose a network to use below.</p>

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
    </div>
  );
}

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  useAnchorWallet,
  useConnection,
  Wallet,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
import { Program, AnchorProvider, setProvider } from "@coral-xyz/anchor";
import idl from "../idl/inc_factory.json";
import type { IncFactory } from "../idl/inc_factory";

export default function useWeb3() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      //       new UnsafeBurnerWalletAdapter(),

      new PhantomWalletAdapter(),
      // Add other wallets here
    ],
    []
  );
  const { connection } = useConnection();

  const wallet = useAnchorWallet();

  const provider = new AnchorProvider(connection, wallet as Wallet, {});
  setProvider(provider);

  // const program = new Program(idl as CounterProgram);
  //   Program Id: 7kmLroKer2JooHLqQi8ugBRHhVVTudxUm1JsAa9gpyhK
  // we can also explicitly mention the provider
  const program = new Program(idl as IncFactory, provider);

  return { connection, endpoint, wallets, program };
}

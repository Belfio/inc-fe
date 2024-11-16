import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useConnection } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

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

  return { connection, endpoint, wallets };
}

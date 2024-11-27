import "@solana/wallet-adapter-react-ui/styles.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import useWeb3 from "./hooks/useWeb3";

const routeNames = import.meta.glob("./routes/**/*.tsx", { eager: true });
interface RouteModule {
  default: React.ComponentType;
  loader?: () => Promise<any>;
  action?: () => Promise<any>;
  ErrorBoundary?: React.ComponentType;
}
const routes = [];
for (const path of Object.keys(routeNames)) {
  const fileName = path.match(/\.\/routes\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  const routeModule = routeNames[path] as RouteModule;
  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: routeModule.default,
    loader: routeModule.loader,
    action: routeModule.action,
    ErrorBoundary: routeModule.ErrorBoundary,
  });
}
const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  })),
  {
    future: {
      v7_partialHydration: true,
      // v7_skipActionStatusRevalidation: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
    },
  }
);

function App() {
  const { endpoint, wallets } = useWeb3();

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Nav />
            <RouterProvider
              router={router}
              future={{
                v7_startTransition: true,
              }}
            />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;

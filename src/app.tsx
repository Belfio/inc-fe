import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  console.log(routeModule.default);
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
      v7_skipActionStatusRevalidation: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
    },
  }
);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;

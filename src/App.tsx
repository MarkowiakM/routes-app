import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import "@/i18n/i18n";
import Layout from "./Layout";
import { ThemeProvider } from "./ThemeProvider";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storageKey="vite-ui-theme">
          <Layout />
          {/* <Toaster /> */}
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;

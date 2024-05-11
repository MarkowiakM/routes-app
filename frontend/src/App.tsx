import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Dashboard from "@/pages/Dashboard";
import { ThemeProvider } from "./ThemeProvider";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storageKey="vite-ui-theme">
          <Dashboard />
          {/* <Toaster /> */}
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;

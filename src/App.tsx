import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { router } from "./routes";
import { MovieProvider } from "./context/movie-context";
import "./App.css";
import { AuthProvider } from "./AuthProvider";
import useMode from "./hooks/useMode";

// Import wallet adapter CSS
require("@solana/wallet-adapter-react-ui/styles.css");

const queryClient = new QueryClient();

function App() {
  const { theme } = useMode();

  // Solana network configuration (you can switch to 'mainnet-beta' for production)
  const network = clusterApiUrl("devnet"); // Use devnet or mainnet-beta for production
  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MovieProvider>
            {/* Solana Wallet Provider setup */}
            <ConnectionProvider endpoint={network}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  {/* App router */}
                  <RouterProvider router={router} />
                </WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
          </MovieProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

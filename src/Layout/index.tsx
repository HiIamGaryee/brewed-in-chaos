import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
// import Navbar from "../components/navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        color: "white",
        // overflowY: "hidden",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Navbar />
      {/* <Sidebar /> */}
      <Box sx={{ width: "100%", flexGrow: 1, overflowY: "auto" }}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

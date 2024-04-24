import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

function Layout() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />

      <Outlet />
    </Box>
  );
}

export default Layout;

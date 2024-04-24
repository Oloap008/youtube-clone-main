import { Box, Stack, Typography } from "@mui/material";

import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(
    function () {
      async function fetchApi() {
        const data = await fetchFromApi(
          `search?part=snippet&q=${selectedCategory}&maxResults=50`
        );

        setvideos(data.items);
      }

      fetchApi();
    },
    [selectedCategory]
  );

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright &copy; {new Date().getFullYear()} Paolo Co
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;

import { Box, Typography } from "@mui/material";

import Videos from "./Videos";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(
    function () {
      async function fetchApi() {
        const data = await fetchFromApi(
          `search?part=snippet&q=${searchTerm}&maxResults=50`
        );

        setvideos(data.items);
      }

      fetchApi();
    },
    [searchTerm]
  );

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;

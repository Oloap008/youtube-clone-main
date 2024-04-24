import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchChannel() {
        const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

        setChannelDetail(data?.items.at(0));
      }

      async function fetchChannelVideos() {
        const data = await fetchFromApi(
          `search?channelId=${id}&part=snippet&order=date&maxResults=50`
        );

        setVideos(data?.items);
      }

      fetchChannel();
      fetchChannelVideos();
    },
    [id]
  );

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 43%, rgba(0,255,153,1) 77%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetails={channelDetail} marginTop="-110px" />
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;

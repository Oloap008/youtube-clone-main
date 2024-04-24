import { Box, Stack } from "@mui/material";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos, direction = "row" }) {
  console.log(videos);
  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;

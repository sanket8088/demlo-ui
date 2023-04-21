import React from "react";

interface IVideoTypes {
  url?: string;
  poster?: string;
  width?: number;
  height?: number;
}

import ReactPlayer from "react-player/lazy";

const VideoComponent = ({
  url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  width = 640,
  height = 360
}: IVideoTypes) => {
  return (
    <video
      width={width}
      height={height}

      controls
      poster="https://www.befunky.com/images/prismic/f318d1f4-2358-4ed2-a1dd-5eef559fd604_hero-photo-to-cartoon-4.jpg?auto=avif,webp&format=jpg&width=896"
    >
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default VideoComponent;

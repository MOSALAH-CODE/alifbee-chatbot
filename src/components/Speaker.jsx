import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/lotties/sound.json";

const Speaker = ({ height, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default Speaker;

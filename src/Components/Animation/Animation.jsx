import React from "react";
import Lottie from "react-lottie";

import animationData from "../../assets/icons8-tick.json";

const AnimationComponent = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default AnimationComponent;

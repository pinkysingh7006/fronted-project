import React from "react";
import { Audio, Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className="overlayDiv">
        <Circles color="#00BFFF" height={80} width={80} />
      </div>
    </>
  );
};

export default Loading;

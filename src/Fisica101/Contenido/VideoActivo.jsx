import React, { useContext } from "react";
import { ContextoFisica101 } from "../ContextoFisica101";

function VideoActivo() {
  const { videoActivo } = useContext(ContextoFisica101);
  console.log(videoActivo);
  return <>{videoActivo}</>;
}

export default VideoActivo;

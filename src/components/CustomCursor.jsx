import React, { useEffect, useRef } from "react";
import hoverSound from "../assets/Hover.mp3";
import clickSound from "../assets/Click.mp3"; // Add your click sound file

export default function CustomCursor() {
  const hoverAudioRef = useRef(null);
  const clickAudioRef = useRef(null);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.tagName === "BUTTON") {
        if (hoverAudioRef.current) {
          hoverAudioRef.current.currentTime = 0;
          hoverAudioRef.current.play();
        }
      }
    };

    const handleClick = (e) => {
      if (e.target.tagName === "BUTTON") {
        if (clickAudioRef.current) {
          clickAudioRef.current.currentTime = 0;
          clickAudioRef.current.play();
        }
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <audio ref={hoverAudioRef} src={hoverSound} />
      <audio ref={clickAudioRef} src={clickSound} />
    </>
  );
}
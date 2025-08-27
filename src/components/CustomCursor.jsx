import React, { useEffect } from "react";
import Hover from "../assets/hover.mp3";
export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-4 h-4 rounded-full bg-black pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out";
    document.body.appendChild(cursor);

    const clickSound = new Audio(hover);
    const hoverSound = new Audio(Hover);

    let audioUnlocked = false;

    const unlockAudio = () => {
      if (!audioUnlocked) {
       
        clickSound.play().catch(() => {});
        clickSound.pause();
        clickSound.currentTime = 0;

        hoverSound.play().catch(() => {});
        hoverSound.pause();
        hoverSound.currentTime = 0;

        audioUnlocked = true;
        console.log("🔊 Audio unlocked");

        // Remove unlock listeners (only need them once)
        window.removeEventListener("click", unlockAudio);
        window.removeEventListener("mousemove", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
      }
    };

    // Cursor follow
    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
    };

    // Play sounds
    const playClick = () => {
      if (!audioUnlocked) return;
      clickSound.currentTime = 0;
      clickSound.play();
    };

    const playHover = () => {
      if (!audioUnlocked) return;
      hoverSound.currentTime = 0;
      hoverSound.play();
    };

    // Attach events
    window.addEventListener("mousemove", move);

    // 🔑 Unlock audio on ANY first interaction
    window.addEventListener("click", unlockAudio);
    window.addEventListener("mousemove", unlockAudio);
    window.addEventListener("keydown", unlockAudio);

    window.addEventListener("click", playClick);

    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", playHover);
    });

    return () => {
      cursor.remove();
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("mousemove", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("click", playClick);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", playHover);
      });
    };
  }, []);

  return null;
}

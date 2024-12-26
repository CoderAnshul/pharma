import React, { useState, useEffect } from "react";
import videobg from "../assets/videos/lab.mp4";

const OurGoal = () => {
  const lines = [
    "To improve lives of people around the globe",
    "Our love and commitment to improve lives of everyone around the globe",
    "Innovating for a healthier and brighter future for all",
    "Empowering communities through medical advancements"
  ];

  const [currentLine, setCurrentLine] = useState(0); // Current line index
  const [displayText, setDisplayText] = useState(""); // Text being typed
  const [isDeleting, setIsDeleting] = useState(false); // Is deleting text
  const [charIndex, setCharIndex] = useState(0); // Character index
  const typingSpeed = 100; // Typing speed in ms
  const delayBetweenLines = 1500; // Delay before moving to the next line

  useEffect(() => {
    const typeEffect = () => {
      if (!isDeleting && charIndex < lines[currentLine].length) {
        // Typing forward
        setDisplayText((prev) => prev + lines[currentLine][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === lines[currentLine].length) {
        // Finished typing, start deleting after delay
        setTimeout(() => setIsDeleting(true), delayBetweenLines);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to the next line
        setIsDeleting(false);
        setCurrentLine((prev) => (prev + 1) % lines.length); // Loop through lines
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lines, currentLine]);

  return (
    <div className="relative w-full h-[60vh]">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videobg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16">
        <div className="bg-cyan-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
          Our Goal
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-4">
          {displayText}
          <span className="text-cyan-500">|</span>
        </h1>
      </div>
    </div>
  );
};

export default OurGoal;

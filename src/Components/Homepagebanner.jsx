import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Homepagebanner = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate heading sliding in from the left
    timeline.fromTo(
      headingRef.current,
      { x: -200, autoAlpha: 0 }, // Start position and visibility
      { x: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }
    );

    // Animate paragraph fading in
    timeline.fromTo(
      paragraphRef.current,
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
      "-=0.5" // Overlap with previous animation
    );

    // Animate button scaling up
    timeline.fromTo(
      buttonRef.current,
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <div className="bg-gray-700 customHeight flex flex-col justify-center items-start px-8 sm:px-16 md:px-24">
      <div className="relative z-50">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white"
        >
          <span className="bg-white text-black px-2">Streamlined</span>
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-4">
          Drug Delivery
        </h2>
      </div>
      <p
        ref={paragraphRef}
        className="text-gray-300 relative z-50 text-sm md:text-base lg:text-lg mt-4 max-w-lg"
      >
        Company pharma pellets offer advanced solutions for efficient, controlled
        release, ensuring optimal drug delivery and effectiveness.
      </p>
      <button
        ref={buttonRef}
        className="bg-blue-500 relative z-50 text-white px-6 py-3 mt-6 rounded-lg hover:bg-blue-600 transition-all"
      >
        CONTACT US
      </button>
    </div>
  );
};

export default Homepagebanner;

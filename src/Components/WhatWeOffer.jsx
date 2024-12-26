import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../assets/images/offerBG.png";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger Animation
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%", // Start animation when top of section reaches 80% of the viewport
            toggleActions: "play none none none", // Play animation once
          },
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image animation (from right)
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" py-12 md:py-20 px-8 sm:px-16 md:px-24"
    >
      <div className=" mx-auto flex flex-col md:flex-row items-center relative space-y-10 md:space-y-0 gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6" ref={textRef}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
            What we <span className="block">offer</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We offer a comprehensive range of Active Pharmaceutical Ingredients
            (APIs), meticulously crafted to meet the highest industry standards.
            Our APIs ensure superior purity and performance, providing the
            essential foundation for effective and reliable pharmaceutical
            products.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our commitment to excellence is further demonstrated by our
            adherence to globally recognized certifications, including ISO
            9001:2015 for quality management systems, WHO-GMP compliance
            ensuring Good Manufacturing Practices, and USFDA approvals for
            select products.
          </p>
          <button
            ref={buttonRef}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            ABOUT US
          </button>
        </div>

        {/* Right Image with Gradient */}
        <div
          className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg overflow-hidden h-full w-full flex justify-center items-center relative p-6"
          ref={imageRef}
        >
          <img
            src={bg}
            alt="Illustration"
            className="max-w-full md:max-w-[90%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

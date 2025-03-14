"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";

// Image Carousel Component
const ImageCarousel = ({ messages }: { messages: string }) => {
  const images = Array.from(
    { length: 19 },
    (_, i) => `/imagini/${String(i + 1).padStart(2, "0")}.jpg`
  );
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 1000); // Transition duration (should match the CSS animation)
    }, 4000); // Image change interval (including transition time)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="absolute min-h-[100dvh] w-full bottom-20 md:bottom-14 -z-10 overflow-hidden">
      {/* Background images with smooth crossfade */}
      <motion.img
        key={index}
        src={images[index]}
        alt="Current Image"
        className="absolute h-full w-full object-cover"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.img
        key={nextIndex}
        src={images[nextIndex]}
        alt="Next Image"
        className="absolute h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFading ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Centered text */}
      <div className="absolute flex justify-center w-full top-[50%]">
        <div className="text-xl md:text-3xl lg:text-4xl bg-white/80 py-2 lg:py-6 px-4 lg:px-16 mx-16 text-center rounded-3xl text-black">
          {messages}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

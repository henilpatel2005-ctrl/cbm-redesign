"use client";
import React from "react";
import { motion } from "framer-motion";

export function HeroWithVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Using a free stock video background */}
        <source
          src="https://videos.pexels.com/video-files/3529019/3529019-sd_640_360_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay - Black 40% at bottom fading to transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.34, 1.56, 0.64, 1], // Chime-inspired easing (cubic-bezier)
          }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            Banking That{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Works for You
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            Experience modern banking with lightning-fast transfers, zero hidden
            fees, and security you can trust.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              backgroundColor: "rgb(0, 172, 91)", // Brighter accent on hover
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300"
          >
            Get Started Now
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/60 text-sm font-light">Scroll to explore</p>
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

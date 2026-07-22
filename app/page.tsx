"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingVariants = {
  initial: { y: 0, rotateX: 0 },
  animate: {
    y: [-20, 20, -20],
    rotateX: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const elements = containerRef.current.querySelectorAll("[data-parallax]");
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col bg-black overflow-x-hidden"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                <span className="text-white font-bold text-xs">✤</span>
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                Central Bank Watch
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-2"
            >
              <button className="text-gray-300 hover:text-white px-3 py-1.5 text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/50 px-4 py-1.5 rounded-lg text-sm font-medium transition-all">
                Download App
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black pt-40 pb-32 md:pb-56 px-4 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              x: [-100, 100, -100],
              y: [-100, 50, -100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"
            animate={{
              x: [100, -100, 100],
              y: [100, -50, 100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Tagline */}
              <motion.div
                variants={itemVariants}
                className="inline-block mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-sm font-bold tracking-widest uppercase">
                  Next Generation Banking
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 text-white"
                style={{
                  letterSpacing: "-0.03em",
                }}
              >
                Pay with a{" "}
                <span className="relative">
                  <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg blur-lg opacity-50" />
                  <span className="relative bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    tap
                  </span>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-md"
              >
                Banking at the speed of thought. Check balances, lock your card,
                and make payments from your wrist instantly.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download size={24} className="group-hover:scale-110 transition-transform" />
                    Download App
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-white/40 transition-all flex items-center justify-center gap-2"
                >
                  Watch Demo
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="mt-16 flex gap-12"
              >
                {[
                  { number: "500K+", label: "Active Users" },
                  { number: "$2B+", label: "Transactions" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Watch Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
              style={{ perspective: "1200px" }}
            >
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="relative"
                style={{ width: "300px", height: "360px" }}
                data-parallax
              >
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 to-green-600/30 rounded-full blur-3xl" />

                {/* Watch Frame */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a1a1a, #0a0a0a)",
                    borderRadius: "60px",
                    border: "10px solid #0f0f0f",
                    padding: "20px",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 80px rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.9), 0 30px 80px rgba(0, 0, 0, 0.7)",
                      "0 0 120px rgba(59, 130, 246, 0.5), inset 0 0 60px rgba(0, 0, 0, 0.9), 0 30px 80px rgba(0, 0, 0, 0.7)",
                      "0 0 80px rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.9), 0 30px 80px rgba(0, 0, 0, 0.7)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Digital Crown */}
                  <motion.div
                    className="absolute"
                    style={{
                      right: "-18px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "24px",
                      height: "48px",
                      background: "radial-gradient(circle, #2a2a2a, #0a0a0a)",
                      border: "2px solid #1a1a1a",
                      borderRadius: "6px 12px 12px 6px",
                      boxShadow:
                        "0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                        "0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)",
                        "0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Action Button */}
                  <div
                    className="absolute"
                    style={{
                      right: "-35px",
                      top: "calc(50% + 60px)",
                      width: "16px",
                      height: "32px",
                      background: "radial-gradient(circle, #222, #000)",
                      borderRadius: "50%",
                      boxShadow: "0 0 15px rgba(0, 0, 0, 0.8)",
                    }}
                  />

                  {/* Screen Display */}
                  <div
                    className="flex flex-col items-center justify-between w-full h-full"
                    style={{
                      background: "#000000",
                      borderRadius: "52px",
                      padding: "28px 20px",
                      border: "1.5px solid #222",
                      boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.6)",
                      gap: "16px",
                    }}
                  >
                    {/* App Name */}
                    <motion.div
                      className="text-xs font-bold uppercase tracking-wider text-gray-600"
                      animate={{
                        opacity: [1, 0.7, 1],
                        textShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 10px rgba(59, 130, 246, 0.5)",
                          "0 0 0px rgba(59, 130, 246, 0)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      Central Bank
                    </motion.div>

                    {/* Card Display */}
                    <motion.div
                      className="flex flex-col items-center justify-center gap-1 text-white font-bold rounded-2xl shadow-2xl"
                      style={{
                        width: "110px",
                        height: "68px",
                        background: "linear-gradient(135deg, #0057B8, #0043a3)",
                        borderRadius: "14px",
                      }}
                      animate={{
                        scale: [1, 1.08, 1],
                        boxShadow: [
                          "0 8px 24px rgba(5, 87, 184, 0.3)",
                          "0 12px 40px rgba(5, 87, 184, 0.5)",
                          "0 8px 24px rgba(5, 87, 184, 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-2xl">💳</span>
                      <span className="text-sm">Card</span>
                    </motion.div>

                    {/* Balance */}
                    <motion.div
                      className="text-white font-black leading-tight"
                      style={{
                        fontSize: "2.8rem",
                        letterSpacing: "-0.03em",
                      }}
                      animate={{
                        opacity: [1, 0.85, 1],
                        textShadow: [
                          "0 0 10px rgba(59, 130, 246, 0.2)",
                          "0 0 20px rgba(59, 130, 246, 0.4)",
                          "0 0 10px rgba(59, 130, 246, 0.2)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      $5,240
                    </motion.div>

                    {/* Account Label */}
                    <div className="text-xs text-gray-500 font-semibold tracking-widest">
                      CHECKING
                    </div>

                    {/* Status Badge */}
                    <motion.div
                      className="flex items-center gap-1.5 rounded-full py-1.5 px-3 text-xs font-bold"
                      style={{
                        background: "rgba(118, 214, 106, 0.18)",
                        border: "1.5px solid rgba(118, 214, 106, 0.65)",
                        color: "#76D66A",
                      }}
                      animate={{
                        opacity: [1, 0.7, 1],
                        boxShadow: [
                          "0 0 10px rgba(118, 214, 106, 0.2)",
                          "0 0 20px rgba(118, 214, 106, 0.4)",
                          "0 0 10px rgba(118, 214, 106, 0.2)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span
                        className="w-1 h-1 rounded-full"
                        style={{ background: "#76D66A" }}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Active
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">
              Scroll to explore
            </p>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative bg-black py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
            animate={{
              x: [-200, 200, -200],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Everything at your{" "}
              <span className="relative">
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg blur-lg opacity-40" />
                <span className="relative bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  fingertip
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Banking features that were only possible on phone, now instantly accessible from your wrist
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💳",
                title: "Instant Payments",
                desc: "Tap to pay with just a glance",
              },
              {
                icon: "🔒",
                title: "Card Controls",
                desc: "Lock or unlock instantly",
              },
              {
                icon: "💰",
                title: "Balance Check",
                desc: "See your balance anytime",
              },
              {
                icon: "📊",
                title: "Spend Tracking",
                desc: "Monitor spending in real time",
              },
              {
                icon: "🔔",
                title: "Smart Alerts",
                desc: "Get notified instantly",
              },
              {
                icon: "🛡️",
                title: "Bank-Level Security",
                desc: "Biometric protection",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 25px 60px rgba(59, 130, 246, 0.25)",
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all group-hover:bg-white/8">
                  <motion.div
                    className="text-5xl mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-black to-black py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-white">
              Get banking on your wrist today
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Download the Central Bank app now and unlock seamless payments,
              instant card control, and real-time balance checks.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 60px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={24} />
                  Download App
                </span>
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.5)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Find a Branch
              </motion.button>
            </motion.div>

            <p className="text-gray-500 text-sm">
              Available on Apple App Store and Google Play Store
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {[
              {
                title: "Product",
                links: ["Features", "Compatibility", "Security", "FAQ"],
              },
              {
                title: "Banking",
                links: ["Personal", "Business", "About", "Careers"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Status", "Accessibility"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Cookies"],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-4 text-sm">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">
              © 2024 Central Bank. All rights reserved. Member FDIC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
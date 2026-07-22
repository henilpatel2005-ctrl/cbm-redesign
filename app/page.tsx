"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const easeApple = [0.22, 1, 0.36, 1];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">✤</span>
              </div>
              <span className="font-semibold text-white text-sm">Central Bank Watch</span>
            </div>
            <div className="flex gap-2">
              <button className="text-gray-300 hover:text-white px-3 py-1.5 text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black pt-40 pb-32 md:pb-56 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">
                  Banking on Your Wrist
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-black leading-[1.1] text-white mb-8 tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
              >
                Pay with a tap
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-md"
              >
                Check balances, lock your card, and make payments from your wrist. Banking has never been this seamless.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download App
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-white transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Watch Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Watch Body with realistic styling */}
                <motion.div
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #3a3a3a, #0a0a0a)",
                    border: "8px solid #1a1a1a",
                    boxShadow: `
                      0 0 80px rgba(0, 87, 184, 0.4),
                      inset 0 0 40px rgba(0, 0, 0, 0.8),
                      0 20px 60px rgba(0, 0, 0, 0.6)
                    `,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 60px rgba(0, 87, 184, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8), 0 20px 60px rgba(0, 0, 0, 0.6)`,
                      `0 0 100px rgba(0, 87, 184, 0.5), inset 0 0 40px rgba(0, 0, 0, 0.8), 0 20px 60px rgba(0, 0, 0, 0.6)`,
                      `0 0 60px rgba(0, 87, 184, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8), 0 20px 60px rgba(0, 0, 0, 0.6)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Screen Display */}
                  <div
                    className="flex flex-col items-center justify-between py-8 px-6 text-center w-fit gap-3"
                    style={{
                      width: "320px",
                      height: "320px",
                      background: "#000000",
                      borderRadius: "32px",
                      border: "2px solid #222",
                      boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <motion.div
                      className="text-xs font-semibold text-gray-600 uppercase tracking-widest"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      Central Bank
                    </motion.div>

                    {/* Card Mockup */}
                    <motion.div
                      className="w-24 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💳 Card
                    </motion.div>

                    {/* Balance */}
                    <motion.div
                      className="text-white font-black leading-none"
                      style={{ fontSize: "2.2rem", letterSpacing: "-0.02em" }}
                      animate={{ opacity: [1, 0.85, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      $5,240
                    </motion.div>

                    <div className="text-xs text-gray-500">Checking</div>

                    {/* Status */}
                    <motion.div
                      className="flex items-center gap-1.5 bg-green-600/20 border border-green-500/60 rounded-full py-1.5 px-3 text-xs font-semibold text-green-400"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-green-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Active
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pinned Watch Experience Section */}
      <section className="relative bg-black py-48 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Four powerful ways to bank
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need, right on your wrist
            </p>
          </motion.div>

          {/* Watch Screens Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Check Balance",
                desc: "See your account instantly",
                icon: "💰",
                color: "from-blue-600 to-blue-500",
              },
              {
                title: "Lock Card",
                desc: "Secure your card instantly",
                icon: "🔒",
                color: "from-purple-600 to-purple-500",
              },
              {
                title: "Accounts",
                desc: "Manage all your accounts",
                icon: "📊",
                color: "from-green-600 to-green-500",
              },
              {
                title: "Activity",
                desc: "View recent transactions",
                icon: "📜",
                color: "from-pink-600 to-pink-500",
              },
            ].map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative">
                  {/* Watch Frame */}
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-blue-600/20 transition-shadow">
                    {/* Screen Display */}
                    <div
                      className={`bg-gradient-to-br ${screen.color} rounded-2xl aspect-square flex flex-col items-center justify-center p-6 relative overflow-hidden`}
                      style={{ borderRadius: "28px" }}
                    >
                      <motion.div
                        className="text-5xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {screen.icon}
                      </motion.div>
                      <div className="text-xs text-white/80 font-medium text-center">
                        {screen.title}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-white text-lg">{screen.title}</h3>
                    <p className="text-gray-400 text-sm">{screen.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Glass Morphism */}
      <section className="relative bg-black py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Everything at your fingertip
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Banking features that were only possible on phone, now on your wrist
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💳",
                title: "Instant Payments",
                desc: "Tap to pay with just a glance at your watch",
              },
              {
                icon: "🔒",
                title: "Card Controls",
                desc: "Lock or unlock your card in seconds",
              },
              {
                icon: "💰",
                title: "Balance Check",
                desc: "See your balance anytime, anywhere",
              },
              {
                icon: "📊",
                title: "Spend Tracking",
                desc: "Monitor your spending in real time",
              },
              {
                icon: "🔔",
                title: "Smart Alerts",
                desc: "Get notified of transactions instantly",
              },
              {
                icon: "🛡️",
                title: "Bank-Level Security",
                desc: "Biometric protection on your wrist",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 87, 184, 0.2)",
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
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

      {/* Timeline / Setup Section */}
      <section className="relative bg-black py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Get started in three steps
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Set up your watch app faster than you can say "instant payments"
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-500 opacity-30" />

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Download the App",
                  desc: "Get the Central Bank app on your smartwatch from the app store",
                },
                {
                  step: "02",
                  title: "Link Your Account",
                  desc: "Connect your existing Central Bank account with biometric authentication",
                },
                {
                  step: "03",
                  title: "Start Banking",
                  desc: "Instantly access payments, balances, and card controls from your wrist",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex gap-8 items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`${i % 2 === 0 ? "text-left" : "text-right"}`}>
                      <div className="text-5xl font-black text-blue-600 mb-2">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-lg">{item.desc}</p>
                    </div>
                  </div>

                  {/* Circle */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(0, 87, 184, 0.4)",
                        "0 0 0 15px rgba(0, 87, 184, 0)",
                        "0 0 0 0 rgba(0, 87, 184, 0.4)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                      <span className="text-white font-bold text-lg">✓</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <div className="flex items-center text-emerald-800 font-medium">
                  Learn more
                  <ChevronRight size={20} className="ml-2" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="relative bg-black py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Works with your watch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Compatible with the latest smartwatches from Apple and Google
            </p>
          </motion.div>

          {/* Compatibility Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Apple Watch",
                version: "watchOS 11 and later",
                devices: ["Series 10", "Ultra 3", "SE"],
                icon: "⌚",
              },
              {
                title: "Google Pixel Watch",
                version: "Wear OS 4 and later",
                devices: ["Pixel Watch 3", "Pixel Watch 2", "Pixel Watch"],
                icon: "⌚",
              },
              {
                title: "Samsung Galaxy Watch",
                version: "Wear OS 3 and later",
                devices: ["Galaxy Watch 7", "Galaxy Watch Ultra", "Galaxy Watch 6"],
                icon: "⌚",
              },
              {
                title: "More Devices",
                version: "Wear OS 3 and later",
                devices: ["Fossil", "Mobvoi", "Garmin & more"],
                icon: "⌚",
              },
            ].map((device, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(0, 87, 184, 0.5)",
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-600/50 transition-all">
                  <div className="text-5xl mb-6">{device.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {device.title}
                  </h3>
                  <p className="text-green-400 text-sm font-semibold mb-4">
                    {device.version}
                  </p>
                  <div className="space-y-2">
                    {device.devices.map((d) => (
                      <p key={d} className="text-gray-400 text-sm">
                        • {d}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-black to-black text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Get banking on your wrist today
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Download the Central Bank app now and unlock seamless payments, instant card control, and real-time balance checks—all from your smartwatch.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-3 group"
              >
                <Download size={24} className="group-hover:scale-110 transition-transform" />
                Download App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Find a Branch
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mt-8"
            >
              Available on Apple App Store and Google Play Store
            </motion.p>
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
              <div key={i}>
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
              </div>
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
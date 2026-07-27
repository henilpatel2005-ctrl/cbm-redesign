"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/5 to-black"></div>
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              💚 Central Bank
            </motion.div>
            <div className="hidden md:flex gap-8">
              {["Personal", "Business", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white/70 hover:text-accent transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
            <motion.button
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 text-white font-bold py-2 px-6 rounded-full transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.1" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="flex-1 text-white z-10 max-w-2xl" variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-sm rounded-full border border-accent/50 hover:border-accent transition-all"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                🎓 Park University Partnership
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Earn{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                $500
              </span>{" "}
              <motion.span
                className="inline-block text-accent"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Today
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-white/80 leading-relaxed font-light">
              Open a Park University Checking Account and get{" "}
              <span className="font-bold text-accent">$500 instantly</span>. Celebrate 150 years with us!
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              {["✨ Quick 3-step process", "🔒 Bank-level security", "📱 100% mobile friendly"].map(
                (feature, i) => (
                  <motion.p
                    key={i}
                    className="text-lg text-white/70 flex items-center gap-3"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl">{feature.split(" ")[0]}</span>
                    {feature.substring(2)}
                  </motion.p>
                )
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-yellow-400/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Open Account Now →</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 -z-10"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="border-2 border-accent text-accent hover:bg-accent/10 font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-accent/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Code: PARKPIRATES
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div className="flex-1 relative z-10" variants={floatingVariants} animate="animate">
            <div className="relative">
              {/* Glowing orbs */}
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />

              {/* Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-accent/50 transition-all shadow-2xl"
                whileHover={{ y: -20, boxShadow: "0 20px 60px rgba(0, 172, 91, 0.3)" }}
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-6xl mb-4">🎓</div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      Park University
                    </h2>
                    <p className="text-white/60 text-lg">150th Anniversary Celebration</p>
                  </div>

                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                    animate={{ scaleX: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <motion.div
                    className="bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-xl font-bold text-xl text-center hover:shadow-lg hover:shadow-accent/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    💰 $500 Checking Bonus
                  </motion.div>

                  <p className="text-white/50 text-center">Official Banking Partner</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "106+", label: "Years Strong", icon: "🏦" },
              { number: "210", label: "Locations", icon: "📍" },
              { number: "$500", label: "Instant Bonus", icon: "💰" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-2xl hover:border-accent/50 transition-all overflow-hidden"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-white/70 text-lg">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Animation Demo Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-black via-black/50 to-black">
        <HeroScrollDemo />
      </section>

      {/* Features Grid */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fast Setup", desc: "Open account in minutes", icon: "⚡" },
              { title: "Secure", desc: "Bank-grade security", icon: "🔒" },
              { title: "24/7 Support", desc: "Always here for you", icon: "💬" },
              { title: "Great Rates", desc: "Competitive and fair", icon: "📈" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="group p-6 rounded-2xl border border-white/10 hover:border-accent/50 bg-gradient-to-br from-white/5 to-transparent hover:from-accent/20 hover:to-transparent transition-all cursor-pointer"
                whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(0, 172, 91, 0.2)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-3xl opacity-30" />

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Get your $500 bonus today.
          </p>

          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-accent via-primary to-accent text-white font-bold text-xl px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Banking Now 🚀</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent -z-10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { title: "Products", items: ["Checking", "Savings", "Loans"] },
              { title: "Company", items: ["About", "Careers", "Contact"] },
              { title: "Support", items: ["Help Center", "Security", "Accessibility"] },
              { title: "Legal", items: ["Privacy", "Terms", "FDIC"] },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/60 hover:text-accent transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">© 2026 Central Bank. Strong Roots. Endless Possibilities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

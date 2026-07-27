"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { HeroWithVideo } from "@/components/hero-with-video";

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
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <HeroWithVideo />

      {/* Navigation - Now overlay on hero */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm border-b border-white/10">
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

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary">💚 Central Bank</div>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Personal</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Business</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="bg-primary hover:bg-secondary">Sign In</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-1 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="flex-1 text-white z-10" variants={containerVariants}>
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-sm font-semibold">🎓 Park University Partnership</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Earn <span className="text-yellow-300">$500</span> Today
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-4 text-white/90 font-light"
            >
              Open a Park University Checking Account and get $500 instantly.
              <br />
              <span className="text-lg text-yellow-300 font-semibold">Celebrate 150 years with us!</span>
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-white/80 mb-8">
              ✓ Quick 3-step process<br />
              ✓ Direct deposit required<br />
              ✓ Valid through December 31, 2026
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold text-lg px-8 rounded-full">
                Open Account Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 rounded-full"
              >
                Use Code: PARKPIRATES
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={scaleVariants}
            className="flex-1 relative z-10"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-full h-96 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎓</div>
                  <h2 className="text-3xl font-bold text-primary mb-2">Park University</h2>
                  <p className="text-gray-600 mb-6">150th Anniversary Celebration</p>
                  <div className="bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-xl font-semibold text-lg">
                    $500 Checking Bonus
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Official Banking Partner</p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-accent rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 text-foreground"
          >
            Why Choose Central Bank?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏦", title: "106+ Years", desc: "Strong roots serving communities" },
              { icon: "📍", title: "210 Locations", desc: "ATMs and branches near you" },
              { icon: "💡", title: "Innovative", desc: "Modern banking solutions" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={scaleVariants}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Scroll Animation Demo */}
      <section className="py-20 bg-white">
        <HeroScrollDemo />
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Financial Journey?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers and get your $500 bonus today.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 rounded-full">
              Open Account Today →
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Checking</a></li>
                <li><a href="#" className="hover:text-primary">Savings</a></li>
                <li><a href="#" className="hover:text-primary">Loans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
                <li><a href="#" className="hover:text-primary">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">FDIC</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            <p>© 2026 Central Bank. Strong Roots. Endless Possibilities.</p>
            <p className="mt-2">Member FDIC. Equal Housing Lender.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

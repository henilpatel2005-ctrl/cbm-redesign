"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Home, TrendingUp, Lock, Eye, Heart, BookOpen, Menu, X, Send, Shield, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-100px" }
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const elements = containerRef.current.querySelectorAll("[data-parallax]");
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || "0.5");
        (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004B36] to-[#00AC5B] flex items-center justify-center">
                <span className="text-white font-black text-lg">C</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-gray-900 text-sm">CENTRAL</span>
                <span className="font-bold text-[#004B36] text-xs">MIDWEST</span>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {["Products", "Borrow", "Wealth", "Learn", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-[#004B36] font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            <button className="px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium">
              Sign In
            </button>
            <button className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#004B36] to-[#00AC5B] rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105">
              Open Account
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Scroll Animation */}
      <section className="pt-32">
        <HeroScrollDemo />
      </section>

      {/* Bank with Us - Products Section */}
      <section className="relative py-32 px-6 bg-white" id="products">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Bank with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Your financial journey starts here. Enjoy a full suite of products and services to support every step of your unique financial vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Home, title: "Checking", desc: "Accounts", color: "from-[#004B36]" },
              { icon: TrendingUp, title: "Savings", desc: "Accounts", color: "from-[#00AC5B]" },
              { icon: Lock, title: "Credit", desc: "Cards", color: "from-[#008457]" },
              { icon: Send, title: "Loans &", desc: "Credit", color: "from-[#004B36]" },
              { icon: Heart, title: "Investing", desc: "Wealth", color: "from-[#00AC5B]" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#004B36]/20 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} to-[#00AC5B] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-black text-lg mb-1 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Borrow Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-gray-50 to-white" id="borrow">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20">
            <span className="text-sm font-black text-[#004B36] tracking-widest uppercase">
              Borrow
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 mt-2">
              Lending Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We believe lending should be easy and stress-free, no matter how big your dreams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Loans",
                desc: "Let us help you find the perfect mortgage solution to turn your dream home into a reality.",
                icon: Home,
              },
              {
                title: "Personal Loans",
                desc: "Enjoy flexible personal loan options that provide the funds you need with competitive rates.",
                icon: Heart,
              },
              {
                title: "Auto Loans",
                desc: "Finance your next ride with ease, whether you're buying new, used, or refinancing.",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#004B36]/20 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#004B36] to-[#00AC5B] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#004B36] font-bold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={20} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wealth Management */}
      <section className="relative py-32 px-6 bg-white" id="wealth">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-sm font-black text-[#004B36] tracking-widest uppercase">
                Wealth Management
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 mt-2">
                Plan, Grow, and Protect Your Wealth
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our wealth management services offer expert guidance, personalized strategies, and a full suite of investment solutions to help you build a secure financial future.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#004B36] to-[#00AC5B] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105">
                Get Started
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] rounded-2xl p-12 h-96 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#004B36]/10 via-[#00AC5B]/10 to-[#008457]/10"></div>
              <div className="relative z-10 text-center">
                <TrendingUp className="text-[#004B36] mx-auto mb-4" size={64} />
                <p className="text-gray-700 font-black text-2xl">Investment Growth</p>
                <p className="text-gray-600 text-sm mt-2">Diversified portfolio strategies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Trusted by millions, we've been serving communities with excellence for over a century.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "115+", label: "Years of Trusted Service" },
              { stat: "230", label: "Locations Nationwide" },
              { stat: "6,708", label: "Hours of Service Weekly" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl hover:border-[#004B36]/20 transition-all"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-[#004B36] to-[#00AC5B] bg-clip-text text-transparent mb-3">
                  {item.stat}
                </div>
                <p className="text-gray-600 text-lg font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Center */}
      <section className="relative py-32 px-6 bg-white" id="learn">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Learning Center
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Explore our latest financial insights and tips to help you make informed decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: "Financial Tips", title: "Smart Savings Strategies", desc: "Learn proven methods to grow your savings and reach your financial goals faster.", icon: BookOpen },
              { tag: "Home Ownership", title: "First-Time Homebuyer Guide", desc: "Everything you need to know about purchasing your first home with confidence.", icon: Home },
              { tag: "Investment Basics", title: "Introduction to Investing", desc: "Discover how to start your investment journey and build long-term wealth.", icon: TrendingUp },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#004B36]/20 transition-all cursor-pointer group"
              >
                <div className="h-40 bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <item.icon className="text-[#004B36]" size={48} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-black text-[#004B36] uppercase tracking-wider">{item.tag}</span>
                  <h3 className="text-xl font-black text-gray-900 mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#004B36] via-[#00AC5B] to-[#008457] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Ready to Transform Your Financial Life?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-2xl mx-auto mb-8 opacity-95"
          >
            Join millions who trust Central Bank of the Midwest to help them achieve their financial dreams.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="px-10 py-4 bg-white text-[#004B36] font-bold rounded-lg hover:scale-105 transition-transform hover:shadow-xl"
          >
            Open an Account Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-black text-white mb-4">Banking</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Checking Accounts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Savings Accounts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Credit Cards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Loans</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclosures</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2024 Central Bank of the Midwest. All rights reserved.</p>
            <p>Member FDIC | Equal Housing Opportunity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

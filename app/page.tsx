"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Home, TrendingUp, Lock, Eye, Heart, BookOpen, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#004B36] to-[#00AC5B] flex items-center justify-center">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className="font-bold text-gray-900">Central Bank</span>
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {["Products", "Borrow", "Wealth", "Learn"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            <button className="px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#004B36] to-[#00AC5B] rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pb-48 px-6 overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block text-sm font-semibold text-[#004B36] tracking-widest uppercase">
              It's Time
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-black mb-6 text-gray-900 leading-tight"
          >
            Introducing Our New{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004B36] via-[#00AC5B] to-[#008457]">
              Watch App
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Check balances, track spending, and lock cards—all from your wrist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#004B36] to-[#00AC5B] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105">
              Download App
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-[#004B36] hover:bg-gray-50 transition-all">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 md:mt-24"
          >
            <div className="inline-block bg-white border border-gray-200 rounded-2xl p-1 shadow-lg">
              <div className="w-96 h-96 bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⌚</div>
                  <p className="text-gray-600 font-medium">Apple Watch Ultra</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-gray-400" size={24} />
        </motion.div>
      </section>

      {/* Your Financial Journey Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Bank with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Your financial journey starts here. Enjoy a full suite of products and services to support every step of your unique financial journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Home, title: "Checking", desc: "Accounts" },
              { icon: TrendingUp, title: "Savings", desc: "Accounts" },
              { icon: Lock, title: "Credit", desc: "Cards" },
              { icon: Eye, title: "Loans &", desc: "Credit" },
              { icon: Heart, title: "Investing", desc: "Wealth" },
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all">
                  <item.icon className="text-[#004B36]" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Borrow Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <span className="text-sm font-semibold text-[#004B36] tracking-widest uppercase">
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
              },
              {
                title: "Personal Loans",
                desc: "Enjoy flexible personal loan options that provide the funds you need with competitive rates.",
              },
              {
                title: "Auto Loans",
                desc: "Finance your next ride with ease, whether you're buying new, used, or refinancing.",
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
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#004B36] font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={20} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wealth Management */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-sm font-semibold text-[#004B36] tracking-widest uppercase">
                Wealth Management
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 mt-2">
                Plan, Grow, and Protect Your Wealth
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our wealth management services offer expert guidance, personalized strategies, and a full suite of investment solutions to help you build a secure financial future.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#004B36] to-[#00AC5B] text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                Get Started
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] rounded-2xl p-12 h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <TrendingUp className="text-[#004B36] mx-auto mb-4" size={48} />
                <p className="text-gray-600 font-medium">Investment Growth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Strong Roots. Endless Possibilities. We're founded on a legacy of trust and community service. These values are rooted in who we are.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "115+", label: "Years Serving Our Communities" },
              { number: "230", label: "Locations and ATMs" },
              { number: "6,708", label: "Community Service Hours" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#004B36] to-[#00AC5B] mb-4">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Center */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <span className="text-sm font-semibold text-[#004B36] tracking-widest uppercase">
              Learn
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 mt-2">
              Navigate Your Finances with Confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Empower yourself with financial knowledge. Explore educational resources to make informed decisions about your money.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Tips for Home Buyers",
                category: "Homeownership",
                time: "1:53 min read",
              },
              {
                title: "How AI is Changing the Economy",
                category: "Trending",
                time: "1:47 min read",
              },
              {
                title: "How to Stay Atop Your Credit Score",
                category: "Credit and Debt",
                time: "3:08 min read",
              },
            ].map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#004B36]/20 transition-all cursor-pointer"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#004B36] tracking-widest uppercase">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#004B36] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-r from-[#004B36] to-[#00AC5B]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-green-50 mb-12"
          >
            Open your account today and join thousands of satisfied customers.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="px-10 py-4 bg-white text-[#004B36] font-bold rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Open an Account
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-white mb-6">Banking</h4>
              <ul className="space-y-3">
                {["Open an Account", "Apply for a Loan", "Apply for a Credit Card", "Download our App"].map(
                  (link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {["About Us", "Careers", "Investor Relations", "Find a Location"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                {["Contact Us", "Learning Center", "Report Lost Card", "Accessibility"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Statement", "Terms & Conditions", "Site Map", "Security"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="mb-4">Member FDIC. Equal Housing Lender. NMLS #407985</p>
            <p>© 2026 Central Bancompany. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

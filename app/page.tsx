"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">✤</span>
              </div>
              <span className="font-semibold text-gray-900 text-sm">Central Bank</span>
            </div>
            <div className="hidden md:flex gap-8">
              {["Accounts", "Loans", "Invest", "Business"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="text-gray-900 hover:text-emerald-600 px-3 py-1.5 text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
                Open Account
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 md:pb-40 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Banking for life's moments
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
              Whether it's your first home, growing business, or planning your future—we're here to help you move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                Open an Account
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
              >
                Talk to a Banker
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl aspect-video flex items-center justify-center overflow-hidden"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-gray-600 font-medium">Mobile Banking Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: "120+", label: "Years of Trust" },
              { number: "45", label: "Locations" },
              { number: "500K+", label: "Happy Customers" },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeInUp}>
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to thrive
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              From checking accounts to mortgages, we have solutions designed for your life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Checking & Savings",
                desc: "Keep your money safe and accessible with competitive rates.",
              },
              {
                title: "Home Loans",
                desc: "Get pre-approved for your dream home with flexible terms.",
              },
              {
                title: "Business Banking",
                desc: "Tools and support to help your business grow.",
              },
              {
                title: "Wealth Management",
                desc: "Plan your financial future with expert guidance.",
              },
            ].map((product, i) => (
              <motion.button
                key={i}
                {...fadeInUp}
                whileHover={{ y: -4 }}
                className="text-left p-8 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all bg-white"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn more
                  <ChevronRight size={20} className="ml-2" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-900 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Banking on your terms
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Mobile app, online platform, or visit us in person. Choose how you want to bank.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 access to your accounts",
                  "Instant transfers and payments",
                  "Bank-level security",
                  "Award-winning customer support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-gray-800 rounded-2xl aspect-square flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-gray-400">Digital Banking Platform</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why customers choose us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Central Bank made opening my first account incredibly easy. The whole process took minutes.",
                author: "Sarah Chen",
                role: "First-time customer",
              },
              {
                quote:
                  "The team went above and beyond to help me get my business loan approved. Truly impressive service.",
                author: "Marcus Rodriguez",
                role: "Business owner",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="border border-gray-200 rounded-xl p-8 bg-gray-50"
              >
                <p className="text-lg text-gray-900 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex gap-1 mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-emerald-100 mb-10">
              Join thousands of customers who trust Central Bank.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              Open Account Now
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Products",
                links: ["Checking", "Savings", "Loans", "Investing"],
              },
              {
                title: "Banking",
                links: ["Personal", "Business", "Wealth", "Commercial"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Security", "Accessibility"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Community"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © 2024 Central Bank. Member FDIC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
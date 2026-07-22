"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home as HomeIcon, Car, CreditCard, TrendingUp, Briefcase, GraduationCap, MapPin, Play } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CB</span>
              </div>
              <span className="font-semibold text-gray-900">Central Bank</span>
            </div>
            <div className="hidden md:flex gap-8">
              {["Banking", "Business", "Why Us", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="text-blue-900 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all hover:shadow-blue-900/20">
                Open Account
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Banking built around your{" "}
                  <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                    life
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-md">
                  Whether you're buying your first home, growing a business, or planning what's next, Central Bank helps you move forward with confidence.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all hover:shadow-blue-900/30 flex items-center justify-center gap-2">
                  Open an Account
                  <ChevronRight size={20} />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                  Talk to a Banker
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-8 pt-4">
                {[
                  { number: "120+", label: "Years", icon: "🏦" },
                  { number: "45", label: "Locations", icon: "📍" },
                  { number: "500K+", label: "Customers", icon: "👥" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-3xl">{stat.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl"
                >
                  📱
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life Moments Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              We help with life's biggest moments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Banking built around what matters most to you
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: HomeIcon, title: "Buying a Home", desc: "Get pre-approved and find your perfect place" },
              { icon: Car, title: "Buying a Car", desc: "Competitive rates and fast approval" },
              { icon: CreditCard, title: "Everyday Banking", desc: "Checking, savings, and rewards" },
              { icon: TrendingUp, title: "Growing Wealth", desc: "Investment and wealth management" },
              { icon: Briefcase, title: "Growing Your Business", desc: "Business accounts and credit lines" },
              { icon: GraduationCap, title: "Saving for College", desc: "Education savings plans and 529s" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-900" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Central Bank
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { number: "120+", label: "Years Strong", desc: "Trusted since 1902" },
              { number: "45", label: "Locations", desc: "Across Kansas & Missouri" },
              { number: "Top", label: "Rated Bank", desc: "Consistent 4.8+ reviews" },
              { number: "KC", label: "Local Bank", desc: "Official bank of KC Chiefs" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
              >
                <div className="text-4xl font-black text-blue-900 mb-2">{item.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our story, your trust
            </h2>
          </motion.div>

          <div className="flex overflow-x-auto gap-4 pb-4">
            {[
              { year: "1902", title: "Founded", desc: "Central Bank opens its doors" },
              { year: "1925", title: "Growth", desc: "Expanding across the region" },
              { year: "1980", title: "Innovation", desc: "First ATM network" },
              { year: "2005", title: "Digital", desc: "Online banking launches" },
              { year: "2024", title: "Today", desc: "Dream Bigger, Bank Better" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-shrink-0 w-80 bg-white p-8 rounded-2xl border border-gray-200"
              >
                <div className="text-sm font-semibold text-blue-900 mb-2">{item.year}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Real customer stories
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "First-time homebuyer",
                quote: "Central Bank made buying our first home feel possible. The whole process was surprisingly smooth.",
                avatar: "👩",
              },
              {
                name: "Marcus Chen",
                role: "Small business owner",
                quote: "Great rates and a banker who actually listens. That's rare in banking.",
                avatar: "👨",
              },
              {
                name: "Jennifer Lee",
                role: "Life savings manager",
                quote: "I trust Central Bank with my family's financial future. That trust was earned over years.",
                avatar: "👩‍🦰",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Learn & grow
            </h2>
            <p className="text-xl text-gray-600">
              Expert guidance to help you make smart financial decisions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "How to buy your first house", icon: HomeIcon },
              { title: "Improve your credit score", icon: TrendingUp },
              { title: "Budgeting 101", icon: CreditCard },
              { title: "Start a savings plan", icon: TrendingUp },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon className="text-blue-900" size={24} />
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to bank differently?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join 500,000+ customers who've already made the switch to smarter banking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all hover:shadow-white/20 flex items-center justify-center gap-2">
                Open Account
                <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all">
                Find a Branch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Banking",
                links: ["Checking", "Savings", "Credit Cards", "Mortgages"],
              },
              {
                title: "Business",
                links: ["Business Accounts", "Business Loans", "Payroll", "Merchant"],
              },
              {
                title: "Support",
                links: ["Help Center", "Security", "Accessibility", "Contact Us"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Blog", "Press"],
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
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">CB</span>
                </div>
                <span className="font-semibold text-white">Central Bank</span>
              </div>
              <p className="text-sm">© 2024 Central Bank. Dream Bigger, Bank Better.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

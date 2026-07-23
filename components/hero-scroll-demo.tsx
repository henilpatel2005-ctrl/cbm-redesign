"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TrendingUp, Send, Lock, Eye, Heart } from "lucide-react";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-gray-900">
              Discover the Future of <br />
              <span className="text-5xl md:text-7xl font-black mt-2 leading-tight bg-gradient-to-r from-[#004B36] via-[#00AC5B] to-[#008457] bg-clip-text text-transparent">
                Digital Banking
              </span>
            </h1>
            <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
              Experience seamless, secure banking with our premium platform. Designed for modern financial freedom.
            </p>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#004B36]/20 via-[#00AC5B]/20 to-[#008457]/20 opacity-60"></div>

            {/* Dashboard mockup */}
            <div className="relative flex flex-col items-center justify-center h-full p-8">
              <div className="w-full max-w-5xl">
                {/* Browser-like frame */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
                  {/* Browser header */}
                  <div className="bg-gray-100 dark:bg-slate-700 px-4 py-3 flex items-center gap-3 border-b border-gray-200 dark:border-slate-600">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-600 dark:text-gray-400 ml-4">
                      app.centralbank.com
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 bg-white dark:bg-slate-800">
                    <div className="space-y-8">
                      {/* Header with balance */}
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div>
                          <h2 className="text-3xl font-black text-[#004B36] mb-2">
                            Welcome Back
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400">
                            Manage your wealth with confidence
                          </p>
                        </div>
                        <div className="text-right mt-4 md:mt-0">
                          <div className="text-4xl font-black text-[#004B36]">
                            $12,549.87
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Available Balance
                          </p>
                        </div>
                      </div>

                      {/* Action cards */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-[#004B36] to-[#00AC5B] text-white p-5 rounded-lg hover:shadow-lg transition-shadow">
                          <Send className="w-6 h-6 mb-2 opacity-90" />
                          <div className="text-sm font-semibold">Send Money</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#00AC5B] to-[#008457] text-white p-5 rounded-lg hover:shadow-lg transition-shadow">
                          <Lock className="w-6 h-6 mb-2 opacity-90" />
                          <div className="text-sm font-semibold">Lock Cards</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#008457] to-[#004B36] text-white p-5 rounded-lg hover:shadow-lg transition-shadow">
                          <TrendingUp className="w-6 h-6 mb-2 opacity-90" />
                          <div className="text-sm font-semibold">Investments</div>
                        </div>
                      </div>

                      {/* Transactions */}
                      <div className="pt-6 border-t border-gray-200 dark:border-slate-700">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-[#004B36]" />
                          Recent Transactions
                        </h3>
                        <div className="space-y-3">
                          {[
                            { name: "Amazon Purchase", amount: "-$129.99", type: "expense", icon: "🛍️" },
                            { name: "Monthly Salary", amount: "+$5,000.00", type: "income", icon: "💼" },
                            { name: "Utility Payment", amount: "-$156.42", type: "expense", icon: "⚡" },
                          ].map((tx, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-lg">{tx.icon}</span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {tx.name}
                                </span>
                              </div>
                              <span
                                className={`font-bold text-sm ${
                                  tx.type === "expense"
                                    ? "text-red-600 dark:text-red-400"
                                    : "text-green-600 dark:text-green-400"
                                }`}
                              >
                                {tx.amount}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick stats */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                        <div className="text-center">
                          <div className="text-2xl font-black text-[#004B36]">98%</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Uptime</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-[#00AC5B]">24/7</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Support</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-[#008457]">256-bit</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Encryption</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

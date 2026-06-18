"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground dark:text-white">
              Experience Banking <br />
              <span className="text-5xl md:text-6xl font-bold mt-1 leading-none bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              Scroll to see our modern banking platform in action. Simple, fast, and secure.
            </p>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50"></div>

            {/* Dashboard mockup */}
            <div className="relative flex flex-col items-center justify-center h-full p-8">
              <div className="w-full max-w-4xl">
                {/* Browser-like frame */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
                  {/* Browser header */}
                  <div className="bg-slate-100 dark:bg-slate-700 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 ml-4">
                      central-bank.app
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 bg-white dark:bg-slate-800">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-primary mb-2">
                            💚 Central Bank
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400">
                            Welcome back!
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">
                            $5,234.50
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Available Balance
                          </p>
                        </div>
                      </div>

                      {/* Cards */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-lg">
                          <div className="text-sm opacity-90">Send Money</div>
                          <div className="text-2xl font-bold mt-2">💸</div>
                        </div>
                        <div className="bg-gradient-to-br from-secondary to-accent text-white p-4 rounded-lg">
                          <div className="text-sm opacity-90">Pay Bills</div>
                          <div className="text-2xl font-bold mt-2">📄</div>
                        </div>
                        <div className="bg-gradient-to-br from-accent to-primary text-white p-4 rounded-lg">
                          <div className="text-sm opacity-90">Investments</div>
                          <div className="text-2xl font-bold mt-2">📈</div>
                        </div>
                      </div>

                      {/* Recent transactions */}
                      <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Recent Transactions
                        </h3>
                        <div className="space-y-2">
                          {[
                            { name: "Park University", amount: "-$500.00", type: "bonus" },
                            { name: "Direct Deposit", amount: "+$2,500.00", type: "income" },
                            { name: "Coffee Shop", amount: "-$5.50", type: "expense" },
                          ].map((tx, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center py-2"
                            >
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {tx.name}
                              </span>
                              <span
                                className={`font-semibold ${
                                  tx.type === "expense"
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {tx.amount}
                              </span>
                            </div>
                          ))}
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

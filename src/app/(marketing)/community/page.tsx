"use client";

import React from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { Users, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { COMMUNITY_CARDS, MEMBER_ROLES } from "@/data/marketing/community";

export default function CommunityPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-[92%]">
          
          <header className="mb-20 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-xs text-white/40 font-mono uppercase tracking-[0.3em] mb-4"
            >
              <span className="w-8 h-px bg-white/20" /> The Researcher Network
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              Connected by research, <br />
              <span className="text-white/40">powered by community.</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed">
              Join a global network of engineers and researchers building the next generation of AI-native interfaces.
            </p>
          </header>

          {/* Social Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {COMMUNITY_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <Link href={card.href} className="block h-full">
                  <div className="h-full p-10 bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 rounded-[2.5rem] hover:bg-white/8 hover:border-white/30 transition-all duration-500 backdrop-blur-md shadow-2xl shadow-black/50 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform ${card.color}`}>
                        <card.icon size={26} />
                      </div>
                      <ArrowUpRight size={18} className="text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-medium mb-3 tracking-tight">{card.title}</h2>
                      <p className="text-white/40 font-light text-sm leading-relaxed mb-8">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        <Users size={12} />
                        {card.stats}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Role Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/8 border border-white/8 rounded-[3rem] overflow-hidden">
            {MEMBER_ROLES.map((role, i) => (
              <motion.div
                key={role.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-12 text-center group hover:bg-white/1 transition-colors"
              >
                <p className="text-5xl font-medium mb-4 tracking-tighter group-hover:scale-105 transition-transform">{role.count}</p>
                <h3 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">
                  {role.label}
                </h3>
                <p className="text-white/40 font-light text-sm">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <section className="mt-40">
            <div className="relative bg-white/2 border border-white/8 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
              
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight leading-tight">Stay optimized.</h2>
                <p className="text-white/40 font-light mb-12 text-lg leading-relaxed">
                  Get the latest research insights and lab updates delivered <br className="hidden md:block" /> weekly to your neural interface (email).
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto p-2 bg-white/3 border border-white/8 rounded-2xl backdrop-blur-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-none px-6 py-3 outline-none focus:ring-0 text-sm font-light text-white"
                  />
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-neutral-200 transition-all text-sm whitespace-nowrap shadow-xl">
                    Join Newsletter
                  </button>
                </form>
              </motion.div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

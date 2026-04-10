"use client";

import React, { useState } from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, Sparkles, Phone, ArrowUpRight, Users } from "lucide-react";
import Link from "next/link";
import { SOCIAL_CHANNELS } from "@/data/marketing/contact";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

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
              <span className="w-8 h-px bg-white/20" /> Connectivity Hub
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              Connect with the <br />
              <span className="text-white/40">core investigator team.</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed">
              Explore our developer channels or transmit a direct research inquiry to the lab.
            </p>
          </header>

          {/* Social Connectivity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {SOCIAL_CHANNELS.map((channel, idx) => (
              <motion.div 
                key={channel.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={channel.href} className="block group h-full">
                  <div className="p-8 rounded-[2.5rem] bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 hover:bg-white/8 hover:border-white/30 transition-all duration-500 backdrop-blur-md shadow-2xl shadow-black/50 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${channel.color}`}>
                        <channel.icon size={22} />
                      </div>
                      <h3 className="text-xl font-medium mb-2 tracking-tight">{channel.name}</h3>
                      <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                        {channel.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest flex items-center gap-2">
                        <Users size={12} /> {channel.stats}
                      </span>
                      <ArrowUpRight size={16} className="text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="p-8 md:p-12 bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 shadow-2xl shadow-black/50 rounded-[3rem] relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Send size={150} strokeWidth={1} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Investigator Name"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Lab Email</label>
                    <input 
                      type="email" 
                      placeholder="name@lab.ai"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Inquiry Topic</label>
                  <select className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light appearance-none select-none text-white">
                    <option className="bg-neutral-900">Technical Support</option>
                    <option className="bg-neutral-900">Research Partnership</option>
                    <option className="bg-neutral-900">Enterprise Scaling</option>
                    <option className="bg-neutral-900">Media Inquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Research Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Describe your inquiry in detail..."
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light resize-none placeholder:text-white/10 text-white"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
                >
                  {isSubmitting ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      Transmit Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-px transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info Section */}
            <div className="space-y-12 py-6">
              <div>
                <h3 className="text-xl font-medium mb-8">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-6 rounded-3xl bg-white/2 border border-white/8 group hover:bg-white/4 transition-all">
                    <Mail className="text-white/20 mb-4 group-hover:text-white transition-colors" size={24} />
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-sm font-medium">core@ikigai-labs.ai</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/2 border border-white/8 group hover:bg-white/4 transition-all">
                    <Phone className="text-white/20 mb-4 group-hover:text-white transition-colors" size={24} />
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-sm font-medium">+1 (555) LAB-CORP</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-8">Lab Headquarters</h3>
                <div className="p-8 rounded-[2.5rem] bg-white/2 border border-white/8 relative overflow-hidden group">
                  <div className="absolute inset-0 grayscale opacity-20 group-hover:opacity-30 transition-opacity">
                    <div className="w-full h-full bg-linear-to-br from-white/10 to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <MapPin className="text-emerald-400 mb-6" size={32} />
                    <h4 className="text-lg font-medium mb-2 uppercase tracking-tight">Silicon Valley Hub</h4>
                    <p className="text-white/40 font-light leading-relaxed mb-6">
                      256 Research Drive, <br />
                      Suite 900, Palo Alto, CA 94301
                    </p>
                    <button className="text-[10px] font-mono text-white/60 hover:text-white uppercase tracking-widest border-b border-white/10 flex items-center gap-2 pb-1 transition-all">
                      Get Directions <Sparkles size={12} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] border border-emerald-500/10 bg-emerald-500/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Global Support Online</span>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Average response time: <span className="text-white font-medium">Under 4 hours</span> for technical inquiries and research proposals.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

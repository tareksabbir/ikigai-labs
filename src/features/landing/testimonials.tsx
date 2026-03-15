"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Exact cut my development time in half. The AI actually understands what I'm building and suggests exactly what I need. No more wading through irrelevant completions.",
    author: "Sarah Chen",
    role: "Senior Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    content:
      "Finally, an AI editor that doesn't feel like it's guessing. Context-aware suggestions that actually make sense. It's like pair programming with someone who knows your codebase.",
    author: "James Wilson",
    role: "Product Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    content:
      "I was skeptical about AI coding tools until Exact. The precision is unmatched—it gets my code style, understands dependencies, and never breaks my builds.",
    author: "Emma Larsson",
    role: "Full-stack Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    content:
      "Best AI autocomplete I've ever used. It's like Exact reads my mind—one suggestion, always the right one. And the privacy-first approach gives me peace of mind.",
    author: "Ethan R",
    role: "Devops",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",
  },
  {
    content:
      "Zero setup, instant productivity. I switched from Cursor and never looked back. Exact just works, and it's noticeably faster. The refactoring feature alone is worth it.",
    author: "Marcus Low",
    role: "Software Architect",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    content:
      "Exact eliminated the back-and-forth I had with other AI assistants. Ask once, get the exact answer with line numbers and context. My productivity has skyrocketed.",
    author: "Sofia Rodriguez",
    role: "Frontend Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
  },
];

// Split testimonials into 3 rows
const firstRow = testimonials.slice(0, 2);
const secondRow = testimonials.slice(2, 4);
const thirdRow = testimonials.slice(4, 6);

const MarqueeRow = ({ items, reverse = false, speed = 20 }: { items: typeof testimonials, reverse?: boolean, speed?: number }) => {
  // Triple the items to ensure seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="flex overflow-hidden py-4 -my-4">
      <motion.div
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 pr-6 min-w-full"
      >
        {duplicatedItems.map((testimonial, index) => (
          <div
            key={index}
            className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/10 transition-colors duration-300 group"
          >
            <p className="text-white/90 text-[15px] leading-relaxed mb-8 h-[100px] overflow-hidden">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">
                  {testimonial.author}
                </h4>
                <p className="text-xs text-white/40">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-[92%] relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-white/40 text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
          >
            {"// Testimonials"}
          </p>
          <h2 className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.02em]">
            <span className="text-white">Loved by developers.</span>{" "}
            <span className="text-white/40">Built for productivity.</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="flex flex-col gap-6 relative">
          <MarqueeRow items={firstRow} speed={25} />
          <MarqueeRow items={secondRow} reverse speed={30} />
          <MarqueeRow items={thirdRow} speed={28} />
          
          {/* Horizontal Gradients for Fade Effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#000000] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#000000] to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      {/* Vertical Fade Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}

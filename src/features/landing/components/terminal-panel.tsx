"use client";

import { X } from "lucide-react";

interface TerminalPanelProps {
  children?: React.ReactNode;
  className?: string;
  tabs?: string[];
  activeTab?: string;
}

export default function TerminalPanel({
  children,
  className = "",
  tabs = ["Terminal", "Output", "Problems"],
  activeTab = "Terminal",
}: TerminalPanelProps) {
  return (
    <div className={`border-t border-white/[0.06] bg-[#060606] p-3 sm:p-4 text-[10px] sm:text-[10.5px] font-mono ${className}`}>
      <div className="flex items-center gap-2 sm:gap-3 mb-3 border-b border-white/[0.05] pb-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={`${
              tab === activeTab
                ? "text-white/70 border-b border-white/40 pb-px"
                : "text-white/25"
            } shrink-0`}
          >
            {tab}
          </span>
        ))}
        <button className="ml-auto text-white/20 shrink-0">
          <X size={11} />
        </button>
      </div>
      <div className="space-y-1.5 text-white/35">
        {children}
      </div>
    </div>
  );
}

"use client";

import { ChevronDown, ChevronRight, File } from "lucide-react";

interface FileExplorerProps {
  className?: string;
}

export default function FileExplorer({ className = "" }: FileExplorerProps) {
  return (
    <div className={`w-full sm:w-44 md:w-52 border-b sm:border-b-0 sm:border-r border-white/[0.06] bg-[#080808] p-3 text-[10px] sm:text-[11px] font-mono flex flex-col rounded-tl-xl overflow-hidden ${className}`}>
      <div className="text-white/60 mb-3 sm:mb-4 px-2 flex items-center justify-between font-medium mt-1 text-[11px] sm:text-[11.5px]">
        <span>Explorer</span>
        <button className="text-white/25 hover:text-white/50 text-base leading-none">···</button>
      </div>
      <div className="flex flex-col gap-0.5 text-white/35">
        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-white/[0.04] cursor-pointer">
          <ChevronDown size={12} className="text-white/45 shrink-0" />
          <span className="text-white/75 font-medium">cogs</span>
        </div>
        <div className="flex items-center gap-1.5 pl-6 pr-2 py-1.5 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
          <ChevronRight size={11} className="text-white/25 shrink-0" />
          <span>components</span>
        </div>
        <div className="flex items-center gap-1.5 pl-6 pr-2 py-1.5 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
          <ChevronRight size={11} className="text-white/25 shrink-0" />
          <span>utils</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1.5 mt-1 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
          <File size={10} className="text-white/25 shrink-0" />
          <span>package.json</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1.5 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
          <File size={10} className="text-white/25 shrink-0" />
          <span>README.md</span>
        </div>
      </div>
    </div>
  );
}

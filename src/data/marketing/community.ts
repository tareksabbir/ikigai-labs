import { Github, Twitter } from "lucide-react";
import { DiscordIcon } from "@/data/landing/navigation";

export const COMMUNITY_CARDS = [
  {
    title: "Discord Lab",
    description: "Join 8,000+ engineers for real-time debugging syncs and early access to research builds.",
    stats: "8.2k Researchers",
    icon: DiscordIcon,
    href: "#",
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Twitter / X",
    description: "Following the latest breakthroughs and system optimizations in the AI research sphere.",
    stats: "15.4k Followers",
    icon: Twitter,
    href: "#",
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    title: "GitHub Core",
    description: "Contribute to our open core and explore the underlying architecture of ikigai interfaces.",
    stats: "2.5k Stars",
    icon: Github,
    href: "#",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export const MEMBER_ROLES = [
  { label: "Principal Investigators", count: "14", desc: "Core contributors managing infrastructure." },
  { label: "Community Advocates", count: "42", desc: "Helping new researchers on-board into the lab." },
  { label: "Beta Subjects", count: "1,200", desc: "Testing early experimental neural interfaces." },
];

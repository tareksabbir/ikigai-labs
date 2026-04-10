import { Github, Twitter } from "lucide-react";
import { DiscordIcon } from "@/data/landing/navigation";

export const SOCIAL_CHANNELS = [
  {
    name: "Discord Hub",
    description: "Real-time syncs and community support.",
    href: "#",
    icon: DiscordIcon,
    stats: "8.2k Engineers",
    color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  },
  {
    name: "X Space",
    description: "Follow the latest Lab developments.",
    href: "#",
    icon: Twitter,
    stats: "15.4k Followers",
    color: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  },
  {
    name: "GitHub Core",
    description: "Explore underlying Lab architecture.",
    href: "#",
    icon: Github,
    stats: "2.5k Stars",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
];

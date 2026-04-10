import { Zap, Cpu, Rocket, Bug } from "lucide-react";

export const UPDATES = [
  {
    version: "v1.2.0",
    date: "March 20, 2024",
    title: "Neural Interface Optimization",
    description: "Major performance overhaul for context-aware completions in large mono-repos.",
    type: "Feature",
    icon: Zap,
    changes: [
      "Reduced latency by 45% using local inference caching",
      "Improved multi-file reasoning for Go and Rust projects",
      "New 'Context-Lock' feature for pinning specific research files",
    ],
  },
  {
    version: "v1.1.5",
    date: "March 05, 2024",
    title: "The Terminal Rewrite",
    description: "A complete rebuild of the Predictive Terminal core for better shell integration.",
    type: "Improvement",
    icon: Cpu,
    changes: [
      "Support for custom ZSH aliases and oh-my-zsh themes",
      "Predictive fix suggestions now appear as ghost text",
      "Fixed a memory leak during long-running build processes",
    ],
  },
  {
    version: "v1.1.0",
    date: "February 12, 2024",
    title: "Collaborative Research v1",
    description: "Bringing multiplayer real-time collaboration to the Lab environment.",
    type: "Feature",
    icon: Rocket,
    changes: [
      "Real-time cursor tracking for up to 10 investigators",
      "Shared research notes with markdown support",
      "Integrated audio-context for quick debugging syncs",
    ],
  },
  {
    version: "v1.0.4",
    date: "January 28, 2024",
    title: "Bug Fix Session",
    description: "Hardening the platform and fixing community-reported edge cases.",
    type: "Patch",
    icon: Bug,
    changes: [
      "Fixed image optimization issues on high-DPI displays",
      "Resolved clerk auth redirect loops in specific Safari versions",
      "Cleaned up UI padding across the dashboard views",
    ],
  },
];

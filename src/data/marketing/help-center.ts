import { HelpCircle, Settings, Shield, FileText } from "lucide-react";

export const FAQ_CATEGORIES = [
  {
    title: "Account & Billing",
    icon: Settings,
    desc: "Manage your research subscription, lab seats, and data exports.",
    questions: ["How do I upgrade my plan?", "Can I add more investigators?", "Lab data ownership policy"],
  },
  {
    title: "Technical Support",
    icon: HelpCircle,
    desc: "Troubleshoot interface issues and system performance.",
    questions: ["Editor latency optimization", "Context engine troubleshooting", "Fixing terminal ghosting"],
  },
  {
    title: "Data Security",
    icon: Shield,
    desc: "Understand how we protect your research and codebase.",
    questions: ["Is my code used for training?", "On-premise deployment", "Compliance standards"],
  },
  {
    title: "Lab Features",
    icon: FileText,
    desc: "Deep dives into using specific ikigai tools.",
    questions: ["Mastering neural completion", "Using predictive terminal", "Custom Lab plugins"],
  },
];

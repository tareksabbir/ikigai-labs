import { Globe, LayoutDashboard, Cpu, Database, ShieldCheck, Activity } from "lucide-react";

export const SERVICES = [
  { name: "Public Website", status: "Operational", icon: Globe, uptime: "99.99%" },
  { name: "Lab Dashboard", status: "Operational", icon: LayoutDashboard, uptime: "99.98%" },
  { name: "Inference API", status: "Operational", icon: Cpu, uptime: "99.95%" },
  { name: "Vector Database", status: "Operational", icon: Database, uptime: "100%" },
  { name: "Auth Services", status: "Operational", icon: ShieldCheck, uptime: "99.99%" },
  { name: "Real-time Sync", status: "Operational", icon: Activity, uptime: "99.97%" },
];

export const INCIDENTS = [
  { date: "March 12, 2024", title: "API Latency Spike", status: "Resolved", duration: "14 mins" },
  { date: "February 28, 2024", title: "Dashboard Maintenance", status: "Scheduled", duration: "2 hours" },
  { date: "January 15, 2024", title: "Search Index Optimization", status: "Resolved", duration: "45 mins" },
];

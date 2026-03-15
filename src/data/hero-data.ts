export const CODE_LINES = [
  {
    num: 1,
    tokens: [
      { t: "keyword", v: "import" },
      { t: "plain", v: " { useState } " },
      { t: "keyword", v: "from" },
      { t: "string", v: " 'react'" },
    ],
  },
  {
    num: 2,
    tokens: [
      { t: "keyword", v: "import" },
      { t: "plain", v: " { supabase } " },
      { t: "keyword", v: "from" },
      { t: "string", v: " '@/lib/supabase'" },
    ],
  },
  { num: 3, tokens: [] },
  {
    num: 4,
    tokens: [
      { t: "keyword", v: "export function" },
      { t: "fn", v: " UserAuth" },
      { t: "plain", v: "() {" },
    ],
  },
  {
    num: 5,
    tokens: [
      { t: "plain", v: "  " },
      { t: "keyword", v: "const" },
      { t: "plain", v: " [email, setEmail] = useState(" },
      { t: "string", v: "''" },
      { t: "plain", v: ")" },
    ],
  },
  {
    num: 6,
    tokens: [
      { t: "plain", v: "  " },
      { t: "keyword", v: "const" },
      { t: "plain", v: " [password, setPassword] = useState(" },
      { t: "string", v: "''" },
      { t: "plain", v: ")" },
    ],
  },
  { num: 7, tokens: [] },
  {
    num: 8,
    tokens: [
      { t: "comment", v: "  // AI suggestion: Add password validation" },
    ],
  },
  {
    num: 9,
    tokens: [
      { t: "plain", v: "  " },
      { t: "keyword", v: "const" },
      { t: "plain", v: " handleSignup = " },
      { t: "keyword", v: "async" },
      { t: "plain", v: " () => {" },
    ],
  },
  { num: 10, tokens: [{ t: "ghost", v: "    // Ghost text (aria):" }] },
  { num: 11, tokens: [{ t: "ghost", v: "    if (password.length < 8) {" }] },
  {
    num: 12,
    tokens: [
      { t: "ghost", v: "      throw new Error('Password must be 8+ chars')" },
    ],
  },
  { num: 13, tokens: [{ t: "ghost", v: "    }" }] },
];

export const TOKEN_COLOR: Record<string, string> = {
  keyword: "#c792ea",
  string: "#c3e88d",
  fn: "#82aaff",
  comment: "#546e7a",
  ghost: "#37474f",
  plain: "#eeffff",
};

export const NAV_LINKS = ["Features", "Use cases", "Testimonials", "Pricing", "FAQ"];
export const WINDOW_TABS = ["UserAuth.tsx ×", "Database.ts", "AI Chat"];
export const AI_BULLETS = [
  "Email validation",
  "Password strength check (8+ chars)",
  "Supabase integration",
];
export const SIDEBAR_ITEMS = [
  { label: "▶  cogs", indent: "pl-3.5", active: false },
  { label: "□  components", indent: "pl-6", active: false },
  { label: "□  utils", indent: "pl-6", active: true },
  { label: "◻  package.json", indent: "pl-6", active: false },
  { label: "◻  README.md", indent: "pl-6", active: false },
];
export const TERMINAL_LINES = [
  {
    text: "Analyzing codebase...",
    status: "✓ Done",
    color: "text-emerald-400",
  },
  {
    text: "Installing dependencies...",
    status: "✓ Done",
    color: "text-emerald-400",
  },
  {
    text: "Running tests...",
    status: "⚠ 2 warnings",
    color: "text-yellow-400",
  },
];


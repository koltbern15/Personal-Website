/**
 * ───────────────────────────────────────────────────────────────────────────
 *  EDIT YOUR SITE HERE
 * ───────────────────────────────────────────────────────────────────────────
 *  Everything visitors see comes from this file. Change the data below and the
 *  whole site updates — you should rarely need to touch the components.
 */

export type Profile = {
  name: string;
  role: string;
  /** One punchy sentence shown in the hero. */
  tagline: string;
  /** Short paragraph for SEO + the About section. */
  summary: string;
  location: string;
  email: string;
  phone?: string;
  /** Short status shown in the hero (e.g. what you're open to). */
  availability: string;
  /** Highlighted credential shown as a hero pill, e.g. a clearance. */
  clearance?: string;
  /** Used for absolute URLs / social cards. Update before deploying. */
  siteUrl: string;
  /** Path inside /public, e.g. "/resume.pdf". Leave "" to hide the button. */
  resumeUrl: string;
  socials: { label: string; href: string }[];
  /** Lines typed out, one after another, under your name in the hero. */
  typedLines: string[];
};

export type Metric = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail?: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
  kind: "work" | "education" | "service";
};

export type Highlight = {
  name: string;
  /** Short tagline shown on the card. */
  blurb: string;
  /** Longer description shown when expanded. */
  description: string;
  stack: string[];
  /** Quantified outcome shown as a chip. */
  impact?: string;
  links: { label: string; href: string }[];
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

// ── Profile ──────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Kolton Bernhardt",
  role: "Senior Systems Analyst — Microsoft 365, Infrastructure & Identity",
  tagline:
    "I administer and secure identity, endpoints, and infrastructure across regulated banking and mission-critical military environments.",
  summary:
    "Systems Analyst with 9+ years of IT experience supporting Microsoft 365, endpoint management, identity administration, and infrastructure across banking and military environments. I currently support 220+ employees across 9 branch locations in an FFIEC-regulated bank — administering Active Directory, Entra ID, Group Policy, Microsoft 365, Intune, NinjaOne, Windows Server, and VMware. My IAM background spans CyberArk, SailPoint IdentityIQ, PowerShell automation, access reviews, and privileged-account workflows.",
  location: "Marion, OH",
  email: "k.t.bern1@gmail.com",
  phone: "(419) 612-2791",
  availability: "Open to Systems / Identity / Infrastructure roles",
  clearance: "Active U.S. Secret Security Clearance",
  siteUrl: "https://koltonbernhardt.com",
  resumeUrl: "/Kolton_Bernhardt_Resume_2026.pdf",
  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/kolton-bernhardt-b7687516a",
    },
    { label: "Email", href: "mailto:k.t.bern1@gmail.com" },
  ],
  typedLines: [
    "I administer identity across AD and Entra ID.",
    "I automate access workflows with PowerShell.",
    "I keep 220+ users secure and supported.",
    "I run infrastructure in regulated and field environments.",
  ],
};

// ── Impact metrics (animated count-up) ────────────────────────────────────────

export const metrics: Metric[] = [
  {
    value: 9,
    suffix: "+",
    label: "Years of IT experience",
    detail: "Across banking and military environments",
  },
  {
    value: 220,
    suffix: "+",
    label: "Users supported",
    detail: "Across 9 branches in an FFIEC-regulated bank",
  },
  {
    value: 300,
    suffix: "+",
    label: "Endpoints managed",
    detail: "Via NinjaOne RMM — patching, monitoring, remediation",
  },
  {
    value: 40,
    suffix: "%",
    label: "Less manual access work",
    detail: "Through PowerShell IAM automation",
  },
];

// ── Career timeline (work + service + education) ─────────────────────────────

export const timeline: TimelineEntry[] = [
  {
    period: "Dec 2023 — Present",
    title: "Senior Systems Analyst",
    org: "Richwood Bank",
    location: "Ohio (Hybrid)",
    kind: "work",
    summary:
      "Own infrastructure, identity, endpoints, and Tier 2–3 escalations for 220+ users across 9 branch locations in a regulated banking environment.",
    highlights: [
      "Administer hybrid identity across on-prem Active Directory and Entra ID — lifecycle, Group Policy, Conditional Access, MFA, device compliance, RBAC, and least-privilege access.",
      "Manage Microsoft 365 (Exchange Online, Teams, SharePoint, OneDrive) and Intune for mailbox administration, collaboration, and mobile device management.",
      "Operate NinjaOne RMM across 300+ endpoints with monitoring, automated patching, alerting, and remote remediation.",
      "Build, image, and deploy standardized workstations; author SOPs and playbooks that improve consistency and audit readiness.",
    ],
    stack: [
      "Active Directory",
      "Entra ID",
      "Microsoft 365",
      "Intune",
      "NinjaOne",
      "Windows Server",
      "VMware",
    ],
  },
  {
    period: "Oct 2022 — Dec 2023",
    title: "IAM & Security Analyst",
    org: "Park National Bank",
    location: "Ohio (Remote)",
    kind: "work",
    summary:
      "Administered privileged access and identity governance across banking systems, strengthening least-privilege and audit-readiness controls.",
    highlights: [
      "Administered CyberArk privileged-access vaults for 100+ accounts — credential rotation, session controls, and centralized secrets management.",
      "Built PowerShell automation for provisioning, de-provisioning, and access revocation — cutting manual access-management effort ~40% while improving accuracy and traceability.",
      "Supported SailPoint IdentityIQ access-certification campaigns, role-based access reviews, entitlement cleanup, and stale-access remediation.",
      "Wrote IAM procedures and admin documentation for account lifecycle, privileged-access workflows, and evidence collection.",
    ],
    stack: [
      "CyberArk",
      "SailPoint IdentityIQ",
      "PowerShell",
      "RBAC",
      "Access Reviews",
    ],
  },
  {
    period: "Sep 2016 — Present",
    title: "IT Specialist (25B) / Staff Sergeant (E-6)",
    org: "Ohio Army National Guard — 1137th Signal Company",
    location: "Ohio · Deployed to Iraq 2024–2025",
    kind: "service",
    summary:
      "IT Specialist and NCO supporting tactical and enterprise IT operations, infrastructure administration, and soldier leadership.",
    highlights: [
      "Deployed to Iraq (Aug 2024 – Jul 2025) supporting network infrastructure, communications systems, and operational continuity in a forward environment.",
      "Administer Active Directory in field environments supporting up to 500 users — account lifecycle, Group Policy, and privileged accounts under DoD standards.",
      "Administer VMware ESXi/vCenter — provisioning, snapshots, resource allocation, and backups for mission-critical systems.",
      "Lead soldiers across technical and operational missions while delivering hands-on IT support.",
    ],
    stack: ["Active Directory", "VMware ESXi/vCenter", "Networking", "DoD Standards"],
  },
  {
    period: "2022",
    title: "B.S. & A.S.",
    org: "Kent State University",
    location: "Ohio",
    kind: "education",
    summary: "Completed both degrees while working full-time in IT.",
    highlights: [
      "Bachelor of Science — Dec 2022.",
      "Associate of Science — May 2022.",
    ],
    stack: [],
  },
];

// ── Highlights / key initiatives (expandable cards) ──────────────────────────

export const highlights: Highlight[] = [
  {
    name: "PowerShell IAM Automation",
    blurb: "Automated provisioning, de-provisioning, and access revocation.",
    description:
      "Designed PowerShell automation around the identity lifecycle to replace slow, error-prone manual access changes. The result was faster turnaround, cleaner audit trails, and more consistent least-privilege enforcement across banking systems.",
    stack: ["PowerShell", "Active Directory", "SailPoint", "CyberArk"],
    impact: "~40% less manual access work",
    links: [],
    featured: true,
  },
  {
    name: "Hybrid Identity Administration",
    blurb: "AD + Entra ID identity and access for a regulated bank.",
    description:
      "Run hybrid identity across on-prem Active Directory and Entra ID for 220+ users — user/group lifecycle, Group Policy, Conditional Access, MFA, device-compliance controls, RBAC, and least-privilege access in an FFIEC-regulated environment.",
    stack: ["Active Directory", "Entra ID", "Conditional Access", "MFA", "Intune"],
    impact: "220+ users · 9 branches",
    links: [],
    featured: true,
  },
  {
    name: "NinjaOne RMM Endpoint Program",
    blurb: "Centralized monitoring and patching across distributed sites.",
    description:
      "Operate NinjaOne RMM across 300+ endpoints, using monitoring, automated patching, remote tooling, alerting, and remediation workflows to keep device health consistent across 9 distributed branch locations.",
    stack: ["NinjaOne RMM", "Windows", "Intune", "Patching"],
    impact: "300+ endpoints",
    links: [],
  },
  {
    name: "CyberArk Privileged Access",
    blurb: "Vaulting and session control for privileged accounts.",
    description:
      "Administered CyberArk privileged-access vaults for 100+ accounts — credential rotation, privileged session controls, and centralized password/secrets management — reducing standing privilege and strengthening audit readiness.",
    stack: ["CyberArk", "RBAC", "Secrets Management"],
    impact: "100+ privileged accounts",
    links: [],
  },
  {
    name: "Tactical IT Operations (Iraq Deployment)",
    blurb: "Infrastructure and identity in a forward-operating environment.",
    description:
      "While deployed, supported network infrastructure, communications, and operational continuity — administering Active Directory for up to 500 users and VMware ESXi/vCenter for mission-critical systems under DoD requirements.",
    stack: ["Active Directory", "VMware", "Networking", "DoD Standards"],
    impact: "Up to 500 field users",
    links: [],
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    category: "Core Administration",
    items: [
      "Active Directory",
      "Entra ID",
      "Group Policy",
      "Microsoft 365",
      "Intune",
      "Windows Server",
    ],
  },
  {
    category: "Endpoint & Support",
    items: [
      "NinjaOne RMM",
      "Imaging",
      "Software Deployment",
      "Patching",
      "Remote Remediation",
      "Tier 2–3 Support",
    ],
  },
  {
    category: "Identity & Security",
    items: [
      "Conditional Access",
      "Zero-Trust",
      "MFA",
      "RBAC",
      "CyberArk",
      "SailPoint IdentityIQ",
      "Access Reviews",
    ],
  },
  {
    category: "Infrastructure",
    items: ["VMware ESXi/vCenter", "Hyper-V", "DNS", "DHCP", "TCP/IP", "Backups"],
  },
  {
    category: "Automation & Compliance",
    items: ["PowerShell", "FFIEC", "NIST 800-53", "DoD Standards"],
  },
];

// ── Certifications & clearance ───────────────────────────────────────────────

export const certifications: string[] = [
  "Active U.S. Secret Security Clearance",
  "CompTIA A+",
  "Microsoft SC-900",
];

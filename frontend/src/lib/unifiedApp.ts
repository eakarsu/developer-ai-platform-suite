import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'projects',
    title: 'Projects',
    href: '/projects',
    category: 'Platform',
    icon: BriefcaseBusiness,
    summary: 'Projects workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Projects queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Projects', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'agents',
    title: 'Agents',
    href: '/agents',
    category: 'Platform',
    icon: Users,
    summary: 'Agents workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Agents queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Agents', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'prompts',
    title: 'Prompts',
    href: '/prompts',
    category: 'Platform',
    icon: ClipboardList,
    summary: 'Prompts workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Prompts queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Prompts', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'evaluations',
    title: 'Evaluations',
    href: '/evaluations',
    category: 'Platform',
    icon: CalendarCheck,
    summary: 'Evaluations workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Evaluations queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Evaluations', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'datasets',
    title: 'Datasets',
    href: '/datasets',
    category: 'Operations',
    icon: Activity,
    summary: 'Datasets workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Datasets queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Datasets', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'deployments',
    title: 'Deployments',
    href: '/deployments',
    category: 'Operations',
    icon: Workflow,
    summary: 'Deployments workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Deployments queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Deployments', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'costs',
    title: 'Costs',
    href: '/costs',
    category: 'Operations',
    icon: FileText,
    summary: 'Costs workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Costs queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Costs', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'observability',
    title: 'Observability',
    href: '/observability',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Observability workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Observability queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Observability', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'code-review',
    title: 'Code Review',
    href: '/code-review',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Code Review workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Code Review queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Code Review', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'tests',
    title: 'Tests',
    href: '/tests',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Tests workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Tests queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Tests', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'docs',
    title: 'Docs',
    href: '/docs',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Docs workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Docs queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Docs', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Developer AI Platform suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "developer-documentation",
    title: "Developer Documentation",
    href: "/developer-documentation",
    category: "Code Review Docs",
    icon: FileText,
    summary: "API docs, runbooks, architecture notes, and onboarding documentation.",
    bullets: ["API docs","Runbooks","Architecture notes"],
    metrics: [
      { label: "Developer Documentation", value: "32", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "pull-request-summaries",
    title: "Pull Request Summaries",
    href: "/pull-request-summaries",
    category: "Code Review Docs",
    icon: ClipboardList,
    summary: "Commit summaries, release notes, reviewer checklist, and migration notes.",
    bullets: ["Commit summary","Release notes","Reviewer checklist"],
    metrics: [
      { label: "Pull Request Summaries", value: "45", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "test-case-generator",
    title: "Test Case Generator",
    href: "/test-case-generator",
    category: "Test Generation QA",
    icon: FileText,
    summary: "Unit, integration, E2E, and regression test case generation.",
    bullets: ["Unit tests","Integration tests","E2E tests"],
    metrics: [
      { label: "Test Case Generator", value: "32", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "qa-plan-builder",
    title: "QA Plan Builder",
    href: "/qa-plan-builder",
    category: "Test Generation QA",
    icon: ClipboardList,
    summary: "QA scenarios, acceptance criteria, edge cases, and coverage review.",
    bullets: ["Scenarios","Acceptance criteria","Coverage"],
    metrics: [
      { label: "QA Plan Builder", value: "45", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "bug-reproduction",
    title: "Bug Reproduction",
    href: "/bug-reproduction",
    category: "Test Generation QA",
    icon: Activity,
    summary: "Bug reports, reproduction steps, expected/actual behavior, and severity.",
    bullets: ["Repro steps","Severity","Expected behavior"],
    metrics: [
      { label: "Bug Reproduction", value: "58", note: 'Active' },
      { label: 'Review', value: "8", note: 'Needs attention' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "visual-qa-review",
    title: "Visual QA Review",
    href: "/visual-qa-review",
    category: "Test Generation QA",
    icon: BarChart3,
    summary: "Screenshot review, visual diffs, layout issues, and UI quality checks.",
    bullets: ["Screenshots","Visual diffs","Layout issues"],
    metrics: [
      { label: "Visual QA Review", value: "71", note: 'Active' },
      { label: 'Review', value: "9", note: 'Needs attention' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "database-health",
    title: "Database Health",
    href: "/database-health",
    category: "Database Admin Agent",
    icon: Workflow,
    summary: "Database health checks, slow queries, connection status, and storage warnings.",
    bullets: ["Database Health queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Database Health", value: "28", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "query-optimization",
    title: "Query Optimization",
    href: "/query-optimization",
    category: "Database Admin Agent",
    icon: Workflow,
    summary: "Query plans, index recommendations, expensive joins, and tuning notes.",
    bullets: ["Query Optimization queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Query Optimization", value: "39", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "schema-migration-review",
    title: "Schema Migration Review",
    href: "/schema-migration-review",
    category: "Database Admin Agent",
    icon: Workflow,
    summary: "Migration risk, rollback plan, constraints, and compatibility checks.",
    bullets: ["Schema Migration Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Schema Migration Review", value: "50", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "scraping-jobs",
    title: "Scraping Jobs",
    href: "/scraping-jobs",
    category: "Web Scraping Agent",
    icon: Workflow,
    summary: "Crawler targets, schedules, selectors, retry policy, and extraction status.",
    bullets: ["Scraping Jobs queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Scraping Jobs", value: "28", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "data-extraction-rules",
    title: "Data Extraction Rules",
    href: "/data-extraction-rules",
    category: "Web Scraping Agent",
    icon: Workflow,
    summary: "Selectors, schema mapping, cleanup rules, and validation checks.",
    bullets: ["Data Extraction Rules queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Data Extraction Rules", value: "39", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "site-monitoring",
    title: "Site Monitoring",
    href: "/site-monitoring",
    category: "Web Scraping Agent",
    icon: Workflow,
    summary: "Website change detection, extraction failures, and source reliability.",
    bullets: ["Site Monitoring queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Site Monitoring", value: "50", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Developer AI Platform documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Developer AI Platform alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Developer AI Platform source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Developer AI Platform users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Developer AI Platform assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Platform', features: ['Projects', 'Agents', 'Prompts', 'Evaluations'] },
  { name: 'Operations', features: ['Datasets', 'Deployments', 'Costs', 'Observability'] },
  { name: 'Governance', features: ['Code Review', 'Tests'] },
  { name: 'Code Review Docs', features: ["Code Review","Developer Documentation","Pull Request Summaries"] },
  { name: 'Test Generation QA', features: ["Test Case Generator","QA Plan Builder","Bug Reproduction","Visual QA Review"] },
  { name: 'Database Admin Agent', features: ["Database Health","Query Optimization","Schema Migration Review"] },
  { name: 'Web Scraping Agent', features: ["Scraping Jobs","Data Extraction Rules","Site Monitoring"] },
  { name: 'Intelligence Layer', features: ['Docs', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AICodeInterpreter', 'AITestGenerationPlatform where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);

export type FeatureSurfaceRow = { id: string; item: string; status: string; owner: string; nextStep: string };
export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['projects', 'Projects', 'Projects operating queue', 'Platform Lead', 'Review and assign next action'],
  ['agents', 'Agents', 'Agents operating queue', 'Platform Lead', 'Review and assign next action'],
  ['prompts', 'Prompts', 'Prompts operating queue', 'Platform Lead', 'Review and assign next action'],
  ['evaluations', 'Evaluations', 'Evaluations operating queue', 'Platform Lead', 'Review and assign next action'],
  ['datasets', 'Datasets', 'Datasets operating queue', 'Operations Lead', 'Review and assign next action'],
  ['deployments', 'Deployments', 'Deployments operating queue', 'Operations Lead', 'Review and assign next action'],
  ['costs', 'Costs', 'Costs operating queue', 'Operations Lead', 'Review and assign next action'],
  ['observability', 'Observability', 'Observability operating queue', 'Operations Lead', 'Review and assign next action'],
  ['code-review', 'Code Review', 'Code Review operating queue', 'Governance Lead', 'Review and assign next action'],
  ['tests', 'Tests', 'Tests operating queue', 'Governance Lead', 'Review and assign next action'],
  ['docs', 'Docs', 'Docs operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ["developer-documentation","Developer Documentation","Developer Documentation review queue","Code Review Docs","Confirm next action and update evidence"],
  ["pull-request-summaries","Pull Request Summaries","Pull Request Summaries review queue","Code Review Docs","Confirm next action and update evidence"],
  ["test-case-generator","Test Case Generator","Test Case Generator review queue","Test Generation QA","Review source context and assign owner"],
  ["qa-plan-builder","QA Plan Builder","QA Plan Builder review queue","Test Generation QA","Confirm next action and update evidence"],
  ["bug-reproduction","Bug Reproduction","Bug Reproduction review queue","Test Generation QA","Confirm next action and update evidence"],
  ["visual-qa-review","Visual QA Review","Visual QA Review review queue","Test Generation QA","Confirm next action and update evidence"],
  ["database-health","Database Health","Database Health review queue","Database Admin Agent","Review source context and assign owner"],
  ["query-optimization","Query Optimization","Query Optimization review queue","Database Admin Agent","Confirm next action and update evidence"],
  ["schema-migration-review","Schema Migration Review","Schema Migration Review review queue","Database Admin Agent","Confirm next action and update evidence"],
  ["scraping-jobs","Scraping Jobs","Scraping Jobs review queue","Web Scraping Agent","Review source context and assign owner"],
  ["data-extraction-rules","Data Extraction Rules","Data Extraction Rules review queue","Web Scraping Agent","Confirm next action and update evidence"],
  ["site-monitoring","Site Monitoring","Site Monitoring review queue","Web Scraping Agent","Confirm next action and update evidence"],
  ["backup-restore-checks","Backup Restore Checks","Backup Restore Checks workspace","Database Admin Deep Workflows","Review source evidence and assign owner"],
  ["index-advisor","Index Advisor","Index Advisor workspace","Database Admin Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["connection-pool-monitor","Connection Pool Monitor","Connection Pool Monitor workspace","Database Admin Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["database-security-review","Database Security Review","Database Security Review workspace","Database Admin Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["robots-compliance-review","Robots Compliance Review","Robots Compliance Review workspace","Web Scraping Deep Workflows","Review source evidence and assign owner"],
  ["selector-drift-monitor","Selector Drift Monitor","Selector Drift Monitor workspace","Web Scraping Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["proxy-retry-queue","Proxy Retry Queue","Proxy Retry Queue workspace","Web Scraping Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["scraped-data-quality","Scraped Data Quality","Scraped Data Quality workspace","Web Scraping Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["unit-test-writer","Unit Test Writer","Unit Test Writer workspace","Test Generation QA","Confirm findings, next action, and audit evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title, item, owner, nextStep]) => [slug, buildSurface(slug, title, item, owner, nextStep)]));
export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]));

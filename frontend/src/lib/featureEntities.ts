export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['projects', 'Projects Records', 'Projects priority queue', 'Open', 'Projects exception list', 'Platform Lead', '$0'],
  ['agents', 'Agents Records', 'Agents priority queue', 'Review', 'Agents exception list', 'Platform Lead', '$0'],
  ['prompts', 'Prompts Records', 'Prompts priority queue', 'Action needed', 'Prompts exception list', 'Platform Lead', '$0'],
  ['evaluations', 'Evaluations Records', 'Evaluations priority queue', 'Open', 'Evaluations exception list', 'Platform Lead', '$0'],
  ['datasets', 'Datasets Records', 'Datasets priority queue', 'Review', 'Datasets exception list', 'Operations Lead', '$0'],
  ['deployments', 'Deployments Records', 'Deployments priority queue', 'Action needed', 'Deployments exception list', 'Operations Lead', '$0'],
  ['costs', 'Costs Records', 'Costs priority queue', 'Open', 'Costs exception list', 'Operations Lead', '$0'],
  ['observability', 'Observability Records', 'Observability priority queue', 'Review', 'Observability exception list', 'Operations Lead', '$0'],
  ['code-review', 'Code Review Records', 'Code Review priority queue', 'Action needed', 'Code Review exception list', 'Governance Lead', '$0'],
  ['tests', 'Tests Records', 'Tests priority queue', 'Open', 'Tests exception list', 'Governance Lead', '$0'],
  ['docs', 'Docs Records', 'Docs priority queue', 'Review', 'Docs exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["developer-documentation","Developer Documentation Records","Developer Documentation operating queue","Review","Developer Documentation follow-up list","Code Review Docs","$0"],
  ["pull-request-summaries","Pull Request Summaries Records","Pull Request Summaries operating queue","Review","Pull Request Summaries follow-up list","Code Review Docs","$0"],
  ["test-case-generator","Test Case Generator Records","Test Case Generator operating queue","Open","Test Case Generator follow-up list","Test Generation QA","$0"],
  ["qa-plan-builder","QA Plan Builder Records","QA Plan Builder operating queue","Review","QA Plan Builder follow-up list","Test Generation QA","$0"],
  ["bug-reproduction","Bug Reproduction Records","Bug Reproduction operating queue","Review","Bug Reproduction follow-up list","Test Generation QA","$0"],
  ["visual-qa-review","Visual QA Review Records","Visual QA Review operating queue","Review","Visual QA Review follow-up list","Test Generation QA","$0"],
  ["database-health","Database Health Records","Database Health operating queue","Open","Database Health follow-up list","Database Admin Agent","$0"],
  ["query-optimization","Query Optimization Records","Query Optimization operating queue","Review","Query Optimization follow-up list","Database Admin Agent","$0"],
  ["schema-migration-review","Schema Migration Review Records","Schema Migration Review operating queue","Review","Schema Migration Review follow-up list","Database Admin Agent","$0"],
  ["scraping-jobs","Scraping Jobs Records","Scraping Jobs operating queue","Open","Scraping Jobs follow-up list","Web Scraping Agent","$0"],
  ["data-extraction-rules","Data Extraction Rules Records","Data Extraction Rules operating queue","Review","Data Extraction Rules follow-up list","Web Scraping Agent","$0"],
  ["site-monitoring","Site Monitoring Records","Site Monitoring operating queue","Review","Site Monitoring follow-up list","Web Scraping Agent","$0"],
  ["backup-restore-checks","Backup Restore Checks Records","Backup Restore Checks operating queue","Open","Backup Restore Checks follow-up list","Database Admin Deep Workflows","$0"],
  ["index-advisor","Index Advisor Records","Index Advisor operating queue","Review","Index Advisor follow-up list","Database Admin Deep Workflows","$0"],
  ["connection-pool-monitor","Connection Pool Monitor Records","Connection Pool Monitor operating queue","Review","Connection Pool Monitor follow-up list","Database Admin Deep Workflows","$0"],
  ["database-security-review","Database Security Review Records","Database Security Review operating queue","Review","Database Security Review follow-up list","Database Admin Deep Workflows","$0"],
  ["robots-compliance-review","Robots Compliance Review Records","Robots Compliance Review operating queue","Open","Robots Compliance Review follow-up list","Web Scraping Deep Workflows","$0"],
  ["selector-drift-monitor","Selector Drift Monitor Records","Selector Drift Monitor operating queue","Review","Selector Drift Monitor follow-up list","Web Scraping Deep Workflows","$0"],
  ["proxy-retry-queue","Proxy Retry Queue Records","Proxy Retry Queue operating queue","Review","Proxy Retry Queue follow-up list","Web Scraping Deep Workflows","$0"],
  ["scraped-data-quality","Scraped Data Quality Records","Scraped Data Quality operating queue","Review","Scraped Data Quality follow-up list","Web Scraping Deep Workflows","$0"],
  ["unit-test-writer","Unit Test Writer Records","Unit Test Writer operating queue","Review","Unit Test Writer follow-up list","Test Generation QA","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));

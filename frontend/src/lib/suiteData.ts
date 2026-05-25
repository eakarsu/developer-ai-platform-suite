export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AICodeInterpreter', ownership: 'Projects source capabilities and workflows', coverage: ['Projects', 'Agents', 'Prompts'] },
  { name: 'AITestGenerationPlatform', ownership: 'Agents source capabilities and workflows', coverage: ['Evaluations', 'Datasets', 'Deployments'] },
  { name: 'AIRAGPlatform', ownership: 'Prompts source capabilities and workflows', coverage: ['Costs', 'Observability', 'Code Review'] },
  { name: 'AIChatbotBuilder', ownership: 'Evaluations source capabilities and workflows', coverage: ['Tests', 'Docs', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Projects', value: '84', note: 'Active' },
  { label: 'Agents', value: '61', note: 'Open' },
  { label: 'Prompts', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Projects operating view', 'Agents operating view', 'Prompts operating view', 'Evaluations operating view', 'Datasets operating view', 'Deployments operating view', 'Costs operating view', 'Observability operating view'];
export const workflowHighlights = ['Projects workflow with records, approvals, audit, and reporting', 'Agents workflow with records, approvals, audit, and reporting', 'Prompts workflow with records, approvals, audit, and reporting', 'Evaluations workflow with records, approvals, audit, and reporting', 'Datasets workflow with records, approvals, audit, and reporting'];

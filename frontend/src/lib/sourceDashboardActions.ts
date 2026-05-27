export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "web-scraping-agent",
    "label": "Web Scraping Agent",
    "description": "Open Web Scraping Agent workflows elevated from AIAutonomousWebScrapingAgent.",
    "href": "/scraping-jobs",
    "sourceProjects": [
      "AIAutonomousWebScrapingAgent"
    ],
    "examples": [
      "Scraping Jobs",
      "Data Extraction Rules",
      "Site Monitoring"
    ],
    "count": 1
  },
  {
    "id": "database-admin-agent",
    "label": "Database Admin Agent",
    "description": "Open Database Admin Agent workflows elevated from AIDatabaseAdminAgent.",
    "href": "/database-health",
    "sourceProjects": [
      "AIDatabaseAdminAgent"
    ],
    "examples": [
      "Database Health",
      "Query Optimization",
      "Schema Migration Review"
    ],
    "count": 1
  },
  {
    "id": "test-generation-qa",
    "label": "Test Generation QA",
    "description": "Open Test Generation QA workflows elevated from AITestGenerationPlatform, AIVisualQAInspector.",
    "href": "/test-case-generator",
    "sourceProjects": [
      "AITestGenerationPlatform",
      "AIVisualQAInspector"
    ],
    "examples": [
      "Test Case Generator",
      "QA Plan Builder",
      "Bug Reproduction",
      "Visual QA Review"
    ],
    "count": 2
  },
  {
    "id": "code-review-docs",
    "label": "Code Review Docs",
    "description": "Open Code Review Docs workflows elevated from AiCodeReviewDocumentation, AICodeInterpreter.",
    "href": "/code-review",
    "sourceProjects": [
      "AiCodeReviewDocumentation",
      "AICodeInterpreter"
    ],
    "examples": [
      "Code Review",
      "Developer Documentation",
      "Pull Request Summaries"
    ],
    "count": 2
  },
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AICemeteryMemorialParkManager",
      "AIChatbotBuilder",
      "AICodeInterpreter",
      "AIDAOGovernanceAssistant",
      "AIDataLabelingPlatform",
      "AIDatabaseAdminAgent",
      "AIGDPRDataMappingPrivacyManager",
      "AIGovernanceModelOps",
      "AIRAGPlatform",
      "AISyntheticDataGenerator",
      "AITestGenerationPlatform",
      "AiCodeReviewDocumentation"
    ],
    "examples": [
      "backend/agents/anomalyDetectorAgent",
      "backend/agents/backupAgent",
      "backend/agents/indexAdvisorAgent",
      "backend/agents/monitorAgent",
      "backend/agents/optimizerAgent",
      "backend/agents/queryAnalyzerAgent"
    ],
    "count": 16
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "AIChatbotBuilder",
      "AIGDPRDataMappingPrivacyManager",
      "AIGovernanceModelOps",
      "AIRAGPlatform",
      "cursor",
      "librelane"
    ],
    "examples": [
      "backend/routers/prompts",
      "backend/routes/llmUsageRegistry",
      "backend/routes/prompts",
      "docs/source/contributors/updating_tools",
      "frontend/src/components/PromptTemplateEditor",
      "frontend/src/components/RegulatoryAndLLM"
    ],
    "count": 6
  },
  {
    "id": "operations",
    "label": "Operations",
    "description": "Open operational tasks, cases, projects, and workflow actions.",
    "href": "/features",
    "sourceProjects": [
      "AIRAGPlatform",
      "cursor"
    ],
    "examples": [
      "backend/services/llm_service",
      "vscode/test/mcp/src/automationTools/task"
    ],
    "count": 2
  },
  {
    "id": "documents",
    "label": "Documents",
    "description": "Open document intake, upload, extraction, and review actions.",
    "href": "/documents",
    "sourceProjects": [
      "cursor"
    ],
    "examples": [
      "vscode/src/vs/workbench/test/browser/componentFixtures/chat/promptFilePickers.fixture",
      "vscode/src/vscode-dts/vscode.proposed.chatPromptFiles.d",
      "vscode/test/mcp/src/automationTools/profiler"
    ],
    "count": 1
  },
  {
    "id": "orders",
    "label": "Orders",
    "description": "Open order, fulfillment, delivery, and purchase actions.",
    "href": "/features",
    "sourceProjects": [
      "AIGDPRDataMappingPrivacyManager"
    ],
    "examples": [
      "backend/routes/gap-no-automated-dsr-fulfillment-data-export",
      "frontend/src/pages/GapNoAutomatedDsrFulfillmentDataExport"
    ],
    "count": 1
  }
];

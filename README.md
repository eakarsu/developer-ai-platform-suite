# Developer AI Platform Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AICodeInterpreter`
- `AITestGenerationPlatform`
- `AIRAGPlatform`
- `AIChatbotBuilder`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/developer-ai-platform-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4210`

Seeded users:
- `admin@dev-ai-platform.local / admin123`
- `manager@dev-ai-platform.local / manager123`
- `analyst@dev-ai-platform.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/developer-ai-platform-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4210 npm run smoke
```

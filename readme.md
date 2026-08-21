# VARIO Cloud TypeScript Definitions

TypeScript type definitions for the VARIO Cloud platform.

The package provides type checking, autocompletion and IntelliSense for VARIO Cloud APIs, platform contexts, OpenAPI schemas and scripting interfaces.

It works in plain JavaScript projects too — no TypeScript build step is required.

## What's included

| Area | Contents |
| ---- | -------- |
| VARIO Cloud APIs | The REST and VQL clients, and the platform modules (EAV, migrations, text enums, webhooks, permitted tokens) |
| Platform contexts | The App object, request context, migrator and error types |
| OpenAPI schemas | The generated ERP schema — every request and response shape of the REST API |
| Scripting interfaces | The script entry points (batch scripts, work items, output filters, the scripting proxy) and the service layer |

## Installation

```bash
npm install @vario-software/types --save-dev
```

To enable type support in your project, create a `jsconfig.json` file in the project root:

```json
{
  "compilerOptions": {
    "checkJs": true,
    "types": ["@vario-software/types"]
  },
  "exclude": [
    "**/node_modules"
  ]
}
```

## VARIO Cloud developer resources

- [Browse the VARIO Cloud Developer Docs](https://developer.vario-software.de/)
- [Explore the VARIO Cloud REST API Reference](https://developer.vario-software.de/api-reference)
- [View all VARIO packages on npm](https://www.npmjs.com/org/vario-software)
- [View the source code on GitHub](https://github.com/vario-software/types)

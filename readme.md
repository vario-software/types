# VARIO Types

TypeScript type definitions for the VARIO Cloud platform. This package provides full autocompletion and type checking for VARIO Cloud Apps built with the [VARIO App Framework](https://github.com/vario-software/vario-app-framework) like our [VARIO App Demo](https://github.com/vario-software/vario-app-demo), including typed API calls, context, feature modules, OpenAPI schemas, and scripting interfaces.

For more information about VARIO and our ERP system, visit [www.vario.ag](https://www.vario.ag). For developer resources, see our [Developer Documentation](https://developer.vario-software.de/).

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
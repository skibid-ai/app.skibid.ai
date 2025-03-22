import unusedImports from "eslint-plugin-unused-imports";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ),
  {
    plugins: {
      "unused-imports": unusedImports,
    },

    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "index",
            "sibling",
            "parent",
            "internal",
            "external",
            "builtin",
            "object",
            "type",
          ],
        },
      ],

      "unused-imports/no-unused-imports": "warn",
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "react-hooks/exhaustive-deps": ["warn"],
      "react/jsx-curly-brace-presence": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-unescaped-entities": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

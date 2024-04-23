import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import pluginjsxAlly from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config({
    files: ["src/**/*.ts", "src/**/*.tsx"],
    extends: [
        eslint.configs.recommended,
        pluginImport.recommended,
        pluginReact.recommended,
        pluginjsxAlly.recommended,
        ...tseslint.configs.recommended,
        prettier,
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/no-autofocus": "off",
        "@typescript-eslint/consistent-type-imports": ["error"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
    },
});

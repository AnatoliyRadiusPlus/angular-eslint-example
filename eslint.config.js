// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          "accessibility": "explicit",
          "overrides": {
            "constructors": "no-public"
          }
        }
      ],
      "complexity": ["warn", 10]
    },
  },
  {
    files: [
      "**/*.component.ts",
      "**/*.service.ts",
      "**/*.directive.ts",
      "**/*.pipe.ts",
      "**/*.module.ts",
    ],
    name: "max-lines-warn",
    rules: {
      "max-lines-per-function": [
        "warn", 
        { 
          max: 100, 
          skipBlankLines: true, 
          skipComments: true 
        }
      ],
      "max-lines": [
        "warn", 
        { 
          max: 500, 
          skipBlankLines: true, 
          skipComments: true 
        }
      ],
    },
  },
  {
    files: ["**/*.component.ts", "**/*.service.ts"],
    rules: {
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "signature",

            "public-static-field",
            "protected-static-field",
            "private-static-field",

            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",

            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",

            "public-get",
            "protected-get",
            "private-get",

            "public-set",
            "protected-set",
            "private-set",

            "constructor",

            "public-instance-method",
            "protected-instance-method",
            "private-instance-method"
          ]
        }
      ]
    }
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
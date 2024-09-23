import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    // Arquivos onde o Eslint deve ser aplicado
    files: ["src/**/*.js"],
    // Propriedade da linguagem sendo utilizada
    languageOptions: {
      // Define o tipo de variáveis globais que estarão disponíveis no ambiente de programação
      globals: globals.node,
      sourceType: "script"
    },
  },
  {
    files: ["frontend/js/*.js"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    }
  },
  {
    rules: {
      // Garante que sejam usadas apenas operadores de comparação estrita
      eqeqeq: ["error"],
      curly: ["error", "all"],
      // Define o número máximo de linhas vazias entre códigos
      "no-multiple-empty-lines": ["error", {"max": 2}],
      // Garante o uso de Camel Case em nosso código.
      camelcase: ["error"],
      // Regra para não uso de mensagem de alerta em geral.
      "no-alert": ["warn"]
    }
  },
  pluginJs.configs.recommended,
  {
    // Arquivos a serem ignorados
    ignores: [
      "*.config.js",
      "node_modules",
      "public/assets/js"
    ],
  },
];

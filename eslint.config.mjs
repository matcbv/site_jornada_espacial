import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

// Utilizando flat config (Forma mais moderna de trabalhar com Eslint):
export default [
	pluginJs.configs.recommended,
	eslintConfigPrettier,
	{
		// Arquivos onde o Eslint deve ser aplicado
		files: ['src/**/*.js'],
		// Propriedade da linguagem sendo utilizada
		languageOptions: {
			// Define o tipo de variáveis globais que estarão disponíveis no ambiente de programação
			globals: globals.node,
			sourceType: 'script',
		},
	},
	{
		files: ['frontend/js/*.js'],
		languageOptions: {
			globals: globals.browser,
			sourceType: 'module',
		},
	},
	{
		rules: {
			// Garante que sejam usadas apenas operadores de comparação estrita.
			eqeqeq: ['error'],
			// Garante o uso de chaves em estruturas condicionais e de controle de fluxo. Com all, garantimos que a regra seja estrita para todos os casos.
			curly: ['error', 'all'],
			// Define o número máximo de linhas vazias entre códigos.
			'no-multiple-empty-lines': ['error', { max: 2 }],
			// Garante o uso de Camel Case em nosso código.
			camelcase: ['error'],
			// Regra para não uso de mensagem de alerta em geral.
			'no-alert': ['warn'],
		},
	},
	{
		// Arquivos a serem ignorados (node_modules é ignorado por padrão):
		ignores: ['public/assets/js/**'],
	},
];

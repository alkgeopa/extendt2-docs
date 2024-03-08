/** @type {import("prettier").Config} */
const config = {
	trailingComma: 'es5',
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	plugins: ['prettier-plugin-astro'],
};

export default config;

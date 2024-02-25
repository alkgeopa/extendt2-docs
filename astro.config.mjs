import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/style.css'],
			title: 'Exten(DT)2 Documentation',
			logo: { src: '@/assets/images/logo.svg', replacesTitle: true },
			social: {
				email: 'mailto:extendt2@gmail.com',
				twitter: 'https://twitter.com/extendt2',
				linkedin: 'https://www.linkedin.com/company/extend-t-2/',
				youtube: 'https://www.youtube.com/channel/UCf5hTi82TXaL01pSAGnq6Dg/about',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'SorBET',
					items: [
						{ label: 'Introduction', link: '/sorbet/introduction' },
						{ label: 'Home Page', link: '/sorbet/home-page' },
						{ label: 'Play the game', link: '/sorbet/play-the-game' },
						{ label: 'Edit a game', link: '/sorbet/edit-a-game' },
						{ label: 'Design a game', link: '/sorbet/design-a-game' },
						{ label: 'The Extended SorBET', link: '/sorbet/extended-sorbet' },
					],
				},
			],
		}),
		tailwind(),
	],
	redirects: {
    '/': '/docs/getting-started/welcome'
  },
	outDir: './docs',
	output: 'static',
	site: 'https://extendt2.com',
	base: '/docs',
	vite: {
		resolve: {
			alias: {
				'@': '/src',
				'@images': '/src/assets/images',
			},
		},
	},
});

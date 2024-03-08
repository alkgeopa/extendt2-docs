import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/style.css'],
			title: 'Exten(DT)² Documentation',
			logo: { src: '@/assets/images/logo.svg', replacesTitle: true },
			social: {
				email: 'mailto:extendt2@gmail.com',
				twitter: 'https://twitter.com/extendt2',
				linkedin: 'https://www.linkedin.com/company/extend-t-2/',
				youtube:
					'https://www.youtube.com/channel/UCf5hTi82TXaL01pSAGnq6Dg/about',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Exten(DT)² Platform',
					items: [
						{
							label: 'Introduction to the platform',
							link: '/extendt2/introduction',
						},
						{
							label: 'Administrator',
							link: '/extendt2/administrator',
						},
						{
							label: 'Educator',
							link: '/extendt2/educator',
							badge: { text: 'Being written...', variant: 'note' },
						},
						{
							label: 'Learner',
							link: '/extendt2/learner',
							badge: { text: 'Being written..', variant: 'note' },
						},
					],
				},
				{
					label: 'SorBET',
					items: [
						{
							label: 'Introduction to SorBET',
							link: '/sorbet/introduction',
						},
						{ label: 'Home Page', link: '/sorbet/home-page' },
						{
							label: 'Play the game',
							link: '/sorbet/play-the-game',
						},
						{ label: 'Edit a game', link: '/sorbet/edit-a-game' },
						{
							label: 'Design a game',
							link: '/sorbet/design-a-game',
						},
						{
							label: 'The Extended SorBET',
							link: '/sorbet/extended-sorbet',
						},
					],
				},
				{
					label: 'ChoiCo',
					items: [
						{
							label: 'Introduction to ChoiCo',
							link: '/choico/introduction',
						},
						{ label: 'Home Page', link: '/choico/home-page' },
						{ label: 'Play Mode', link: '/choico/play-mode' },
						{ label: 'Design Mode', link: '/choico/design-mode' },
						{ label: 'Edit Mode', link: '/choico/edit-mode' },
						{
							label: 'Programming with Blocks',
							link: '/choico/programming-with-blocks',
						},
						{
							label: 'Choico Blocks',
							link: '/choico/choico-blocks',
							badge: { text: 'Being written...', variant: 'note' },
						},
					],
				},
			],
		}),
		tailwind(),
	],
	redirects: {
		'/': '/docs/getting-started/welcome',
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

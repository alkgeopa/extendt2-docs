import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/style.css', './src/styles/cookieconsent.css'],
			title: 'Exten(DT)² Guides & Documentation',
			description:
				'Guides and documentation for the Exten(DT)² platform, the various games and tools, and how to use them.',
			logo: {
				src: '@/assets/images/logo.svg',
				replacesTitle: true,
			},
			social: {
				twitter: 'https://twitter.com/extendt2',
				linkedin: 'https://www.linkedin.com/company/extend-t-2/',
				youtube:
					'https://www.youtube.com/channel/UCf5hTi82TXaL01pSAGnq6Dg/about',
			},
			editLink: {
				baseUrl: 'https://github.com/alkgeopa/extendt2-docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: {
						directory: 'getting-started',
					},
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
						},
						{
							label: 'Learner',
							link: '/extendt2/learner',
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
						{
							label: 'Home Page',
							link: '/sorbet/home-page',
						},
						{
							label: 'Play the game',
							link: '/sorbet/play-the-game',
						},
						{
							label: 'Edit a game',
							link: '/sorbet/edit-a-game',
						},
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
						{
							label: 'Home Page',
							link: '/choico/home-page',
						},
						{
							label: 'Play Mode',
							link: '/choico/play-mode',
						},
						{
							label: 'Design Mode',
							link: '/choico/design-mode',
						},
						{
							label: 'Edit Mode',
							link: '/choico/edit-mode',
						},
						{
							label: 'Programming with Blocks',
							link: '/choico/programming-with-blocks',
						},
						{
							label: 'Choico Blocks',
							link: '/choico/choico-blocks',
							badge: {
								text: 'Being written...',
								variant: 'note',
							},
						},
					],
				},

 {
					label: 'Dashboard',
					items: [
						{
							label: 'Introduction to Dashboard',
							link: '/dashboard/introduction',
						},
						{
							label: 'Educators',
							link: '/dashboard/educators',
						},
						{
							label: 'Predefined Dashboard',
							link: '/dashboard/predefined_dashboard',
						},
						{
							label: 'Configurable Dashboard',
							link: '/dashboard/configurable_dashboard',
						},
						{
							label: 'Access Raw LA Data',
							link: '/dashboard/raw_data',
						},

						{
							label: 'Seeting DT Phases',
							link: '/dashboard/desing_thinking',
						},
						
					],
			   },
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://www.googletagmanager.com/gtag/js?id=G-NKGZNDWRDW',
						async: true,
						type: 'text/plain',
						'data-category': 'analytics',
						'data-service': 'Google Analytics',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/docs/scripts/gtag.js',
						type: 'text/plain',
						'data-category': 'analytics',
						'data-service': 'Google Analytics',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/docs/scripts/cookieconsent-config.js',
						type: 'module',
					},
				},
			],
			components: {
				// Override the default `SocialIcons` component.
				Footer: './src/components/footer.astro',
			},
		}),
		tailwind(),
		// partytown({
		// 	config: {
		// 		forward: ['dataLayer.push'],
		// 	},
		// }),
	],
	redirects: {
		'/': '/docs/getting-started/welcome',
	},
	outDir: './docs',
	output: 'static',
	base: '/docs',
	vite: {
		resolve: {
			alias: {
				'@': '/src',
				'@scripts': '/src/scripts',
				'@styles': '/src/styles',
				'@images': '/src/assets/images',
			},
		},
	},
});

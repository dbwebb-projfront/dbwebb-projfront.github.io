// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Projekt Frontend',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dbwebb-projfront/dbwebb-projfront.github.io' }],
			sidebar: [
				{ label: 'Kursöversikt', link: '/' },
				{
					label: "Sprints",
					items: [
						'kravspec',
						'sprint0',
						'sprint1',
						'sprint2',
						'sprint3',
						'sprint4',
						'sprint99',
					]
				},
			],
			pagination: false,
		}),
	],
});

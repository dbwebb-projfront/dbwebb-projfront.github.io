// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PROJFRONT',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dbwebb-projfront/dbwebb-projfront.github.io' }],
			sidebar: [
				{ label: 'Kursöversikt', link: '/' },
				{
					label: "Sprints",
					items: [
						'kunskap/scrum',
						'kunskap/arbeta_i_sprintar',
						'kunskap/user_stories_tasks',
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
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			pagination: false,
		}),
	],
});

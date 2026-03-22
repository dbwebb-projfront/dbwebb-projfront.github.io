// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid({ autoTheme: true }), //mermaid, @mattische likes this
		starlight({
			title: 'PROJFRONT',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dbwebb-projfront/dbwebb-projfront.github.io' }],
			sidebar: [
				{ label: 'Kursöversikt', link: '/' },
				{
					label: 'Om kursen',
					items: [
						'kunskap/information_om_kursen',
						'kunskap/scrum',
						'kunskap/arbeta_i_sprintar',
						'kunskap/user_stories_tasks',
						'kunskap/flow_pr_cr',
					]
				},
				{
					label: 'Övrigt',
					items: [
						'kunskap/milestones',
						'kunskap/ordlista',
					]
				},
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
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			pagination: false,
		}),
	],
});

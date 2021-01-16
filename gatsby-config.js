require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'JUMBO STORE!!!',
		description: ' VIDEOCARDS LIKE ELEPHANTS!! Kick off your OLD videocard and buy some of the ones JUMBO STORE has to offer!',
		author: '@Irungaray',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-stripe',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-stripe',
			options: {
				objects: ['Price'],
				secretKey: process.env.GATSBY_STRIPE_SK,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/icon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-prettier-eslint',
			options: {
				prettier: {
					patterns: [
						'**/*.{css,scss,less}',
						'**/*.{json,json5}',
						'**/*.{graphql}',
						'**/*.{md,mdx}',
						'**/*.{html}',
						'**/*.{yaml,yml}',
					],
				},
				eslint: {
					patterns: '**/*.{js,jsx,ts,tsx}',
					customOptions: {
						fix: true,
						cache: true,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography',
			},
		}
	],
};

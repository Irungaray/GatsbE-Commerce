module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
		description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
		author: '@gatsbyjs',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
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
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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

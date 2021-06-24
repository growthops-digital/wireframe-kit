const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [
		'./src/**/*.js',
	],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				11: '3.5rem',
				12: '5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

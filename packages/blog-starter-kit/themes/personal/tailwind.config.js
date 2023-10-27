/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				'accent-1': '#ECA3CB',
				'accent-2': '#C4507C',
				'accent-7': '#FF00FF',
				success: '#94C930',
				cyan: '#79FFE1',
				primary: colors.blue,
			},
			spacing: {
				28: '10rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2rem',
				'6xl': '3rem',
				'7xl': '5rem',
				'8xl': '7rem',
			},
			boxShadow: {
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

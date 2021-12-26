module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Coustard'],
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
			8: '8px',
		},
		extend: {
			colors: {
				brand: {
					yellow: 'FFC30B',
					green: '76BA16',
					'green-darker': '66A103',
					grey: 'BEBEBE',
					beggie: 'F0EAD6',
					orange: 'FF7A06',
				},
			},
		},
	},
	plugins: [],
}

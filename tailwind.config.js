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
					'green-darker': '72B513',
					grey: 'BEBEBE',
					beggie: 'F0EAD6',
					'beggie-darker': 'E7E1CC',
					orange: 'FF7A06',
					'orange-darker': 'F67300',
				},
				white: 'FFFDFA',
			},
		},
	},
	plugins: [],
}

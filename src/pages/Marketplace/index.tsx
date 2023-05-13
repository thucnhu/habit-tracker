import React from 'react'
import MarketplaceCarousel from './components/MarketplaceCarousel'

export default function Marketplace() {
	return (
		<>
			<h2 className='text-brand-orange my-10 w-full flex items-center justify-center'>Your collection</h2>
			<MarketplaceCarousel />
		</>
	)
}

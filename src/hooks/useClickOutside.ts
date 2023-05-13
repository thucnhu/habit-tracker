import { useEffect, useRef } from 'react'

export default function useClickOutside(handler) {
	const clickRef = useRef(null)

	function clickOutside(e) {
		// @ts-ignore
		if (clickRef.current && !clickRef.current.contains(e.target)) handler()
	}

	useEffect(() => {
		document.addEventListener('mousedown', clickOutside)

		return () => {
			document.removeEventListener('mousedown', clickOutside)
		}
	}, [])

	return clickRef
}

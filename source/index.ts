import { useState, useEffect } from 'react'

/**
 * After X milliseconds, trigger a state change.
 *
 * Use cases for this are:
 *
 * 1. Refresh your component every second. For example: `useInterval(1000)`
 * 2. Refresh your component when the first piece of data inside it expires. For example: `useInterval([milkExpires, breadExpires])`
 *
 * @param interval The desired interval specified in milliseconds. If an array, then the smallest non-negative number is used. If the interval is negative, then it is discarded, as it is considered no longer relevant.
 * @param threshold If the interval is valid and below the threshold, then round up to the threshold. For example: `useInterval(300, 1000)` will set the interval to `1000`, and `useInterval(-300, 1000)` still correctly discards the interval. Example use case: A threshold of `1000` would be used to prevent `useInterval(1)` from causing a thousand state changes within a single second, as such, you should set the threshold to the milliseconds that a state change is visually unnecessary.
 *
 * @returns An aimless value to cause state to change, it currently represents the number of fulfilled interval completions.
 */
export function useInterval(
	interval: number | number[],
	threshold: number = 0
): number {
	// make the state reflect the iterations
	const [iterations, setIterations] = useState(0)
	// timers are side effects
	useEffect(function() {
		if (Array.isArray(interval)) {
			// don't emit unexpected behaviour if nothing was provided
			if (interval.length === 0) return
			// fetch the smallest valid value
			interval = interval.filter(ms => ms >= 0).sort()[0]
		}
		// if the value is negative, no need for an interval
		if (interval < 0) return
		// if the value is below the threshold, then set it to the threshold
		if (interval < threshold) interval = threshold
		// create the timer
		const timer = setTimeout(() => {
			// bump the interation state
			setIterations(iterations + 1)
		}, interval)
		// cleanup the timer
		return () => clearTimeout(timer)
	})
	// return the interations
	return iterations
}

/**
 * Create a state that reflects the status of meta keys.
 * @returns `true` if a meta key is active, `false` if a meta key is not active.
 */
export function useMetaKey(): boolean {
	const [active, setActive] = useState(false)
	function onMetaKey(e: KeyboardEvent) {
		setActive(e.shiftKey || e.metaKey || e.altKey || e.ctrlKey)
	}
	useEffect(function() {
		document.addEventListener('keydown', onMetaKey)
		document.addEventListener('keyup', onMetaKey)
		return function() {
			document.removeEventListener('keydown', onMetaKey)
			document.removeEventListener('keyup', onMetaKey)
		}
	})
	return active
}

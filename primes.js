let start = 1
let length = 1019
let end = start + length
let cols = 30
let maxFoundPrime = 1
let showNums = true

const draw = () => {
	// Start with an odd Prime
	if (start % 2 === 0) {
		start += 1
	}

	// Values to mark in red
	const marks = [
	]

	// Found Primes
	const foundPrimes = [
		// 3,
		// 5,
		// 7, ...
	]

	for (let i = 0; i < maxFoundPrime; i += 1) {
		foundPrimes.push(primes[i])
	}

	const markMod = i => {
		foundPrimes.forEach(prime => {
			if (i % prime === 0) {
				marks.push(i)
			}
		})
	}

	for (let i = start; i < end; i += 2) {
		markMod(i)
	}

	grid.style.width = cols * 10 + 'px'

	while (grid.firstChild) {
		grid.removeChild(grid.firstChild)
	}

	for (let i = start; i < end; i += 2) {
		const cell = document.createElement('div')
		cell.className = 'cell'

		if (primes.indexOf(i) > -1) {
			cell.className += ' prime'
		}

		if (marks.indexOf(i) > -1) {
			cell.className += ' mark'
		}

		if (showNums) {
			cell.innerHTML = i
		}

		grid.appendChild(cell)
	}

	console.log('Done!')
}

// Events

window.addEventListener('DOMContentLoaded', () => {
	draw()
})

zoom.addEventListener('input', event => {
	zoomContainer.style.webkitTransform = 'scale(' + zoom.value + ')'
})

form_start.addEventListener('change', event => {
	start = Number(form_start.value)
	end = start + Number(length)
	form_end.value = end
	draw()
})

form_length.addEventListener('change', event => {
	length = Number(form_length.value)
	end = start + length
	draw()
})

form_cols.addEventListener('change', event => {
	cols = Number(form_cols.value)
	draw()
})

form_markprimes.addEventListener('change', event => {
	maxFoundPrime = Number(form_markprimes.value)
	draw()
})

form_shownums.addEventListener('change', event => {
	showNums = form_shownums.checked ? true : false
	draw()
})
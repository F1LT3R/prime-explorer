// Big thanks to Dan York for the 10M Primes!
// http://my.core.com/~katiemarie10/prime/prime.htm
const fs = require('fs')

const rs = fs.createReadStream('./primes10M.dat')
const ws = fs.createWriteStream('./primes10M.js')

const head = 'const primes=['
const tail = ']'
let count = 0

rs.setEncoding('utf8')
rs.on('data', chunk => {
	let output = ''

	if (count === 0) {
		output = head
	}

	count += 1

	output += chunk.replace(/ /g, ',')
	ws.write(output)
})

rs.on('end', () => {
	ws.write(tail)
})

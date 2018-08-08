let length = 5

console.log('### LEVEL 0 ###')
for (let i = 1; i <= 5; i++) {
	console.log('*'.repeat(i))
}

console.log('### LEVEL 1 ###')
for (let i = length - 1; i > 0; i--) {
	console.log('*'.repeat(i))
}

console.log('### LEVEL 2 ###')
let triangle = ''

for (let i = 0; i <= length; i++) {
	for (let j = 0; j <= length - i; j++) {
		triangle += ' '
	}

	for (let k = 0; k <= i; k++) {
		triangle += '* '
	}

	triangle += '\n'
}

console.log(triangle)

console.log('### LEVEL 3 ###')
for (let i = length; i < length * 2; i++) {
	console.log(' '.repeat(i) + '***')
}

console.log('### LEVEL 4 ###')
let invertedTriangle = ''

for (let i = length; i >= 0; i--) {
	for (let j = length; j >= i; j--) {
		invertedTriangle += ' '
	}

	for (let k = 0; k <= i; k++) {
		invertedTriangle += '* '
	}

	invertedTriangle += '\n'
}

console.log(invertedTriangle)

console.log('### LEVEL 5 ###')
for (let i = length - 1; i >= 0; i--) {
	let text = ''

	for (let j = 0; j <= i + 2; j++) {
		if (j >= 2) {
			text = text + (i + 2)
		} else {
			text = text + i
		}
	}

	console.log(text)
}

console.log('### LEVEL 6 VER. 2 ###')

let logo2 = ''

for (let i = 0; i <= size - 1; i++) {
 logo2 +=
   '  '.repeat(size - 1) +
   ' '.repeat(size - i) +
   ' *'.repeat(i + 1) + '\n'
}

// TOP-BOTTOM

for (let i = size; i >= 0; i--) {
 logo2 +=
   '  '.repeat(size - 1) +
   ' '.repeat(size - i) +
   ' *'.repeat(i + 1) + '\n'
}

// BOTTOM

for (let i = size; i >= 0; i--) {
 logo2 +=
   ' '.repeat(i) +
   ' *'.repeat(size) + // BOTTOM-LEFT
   ' '.repeat(size - i) + // BOTTOM-DIVIDER-LEFT
   ' '.repeat(size - i) + // BOTTOM-DIVIDER-RIGHT
   ' *'.repeat(size) + '\n' // BOTTOM-RIGHT
}

console.log(logo2)

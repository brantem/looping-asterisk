console.log('### LEVEL 6 VER. 1 ###')

let size = 7
let logo1 = ''

for (let i = 0; i <= size - 1; i++) {
  logo1 += '  '.repeat(size - 1)

  for (let j = 0; j <= size - i; j++) {
    logo1 += ' '
  }

  logo1 += ' *'.repeat(i + 1) + '\n'
}

for (let i = size; i >= 0; i--) {
  logo1 += '  '.repeat(size - 1)

  for (let j = size; j >= i; j--) {
    logo1 += ' '
  }

  logo1 += ' *'.repeat(i + 1) + '\n'
}

for (let i = size; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    logo1 += ' '
  }

  for (let k = size; k > 0; k--) {
    logo1 += ' *'
  }

  for (let l = size - i; l > 0; l--) {
    logo1 += ' '
  }

  for (let m = 0; m < size - i; m++) {
    logo1 += ' '
  }

  for (let l = 1; l <= size; l++) {
    logo1 += ' *'
  }

  logo1 += '\n'
}

console.log(logo1)

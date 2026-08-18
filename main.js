const testArray = [1, 2, 3, 4, 5, 100]

const angka = testArray.includes(6)
const posisiAngka = testArray.indexOf(100)

if (angka) {
    console.log(posisiAngka)
} else {
    console.log('Tidak ada array yang dimaksud')
}
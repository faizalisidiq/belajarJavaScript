// 1. Membuat mesin pemrosesannya (Function)
function hitungSisaKursi(totalKursi, kursiTerisi) {
  let sisa = totalKursi - kursiTerisi;
  return sisa;
}

// 2. Menggunakan mesinnya
let hasil = hitungSisaKursi(50, 45);

console.log("Sisa kursi yang tersedia adalah: " + hasil);
// Ekspektasi output: "Sisa kursi yang tersedia adalah: 5"

function hitungPerkalian(x, y) {
  return (hasil = x * y);
}
const angka = hitungPerkalian(5, 10);
console.log(`Hasil perkalian dari 5 dan 10 adalah: ${angka}`);

const jamaah = 2;
const price = 40000000;
const diskon = 0.1;

function hitungHarga(x, y) {
  if (x > 1) {
    return x * y;
  } else {
    return y;
  }
}
function hitungDiskon(x) {
  return x * diskon;
}

const total = hitungHarga(jamaah, price);
const totalDiskon = hitungDiskon(total);
const totalBayar = total - totalDiskon;
console.log(`Total jamaah ada ${jamaah} orang, dan diskon yang didapat sebanyak ${totalDiskon}, maka total harga yang harus dibayar adalah: Rp. ${totalBayar}`);

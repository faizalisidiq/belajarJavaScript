// let mahasiswa = {
//   name: "Faiz Ali Sidiq",
//   jurusan: "Teknik Informatika",
//   age: 22,
//   gender: "Laki-laki",
//   salam: function () {
//     return `Halo nama saya adalah ${this.name}`;
//   },
// };

// for (let i in mahasiswa) {
//   console.log(`${i} : ${mahasiswa[i]}`);
// }

// console.log(mahasiswa.salam());

let produk = [
  {
    name: "Laptop",
    price: 10,
    stock: 10,
  },
  {
    name: "Hp",
    price: 120,
    stock: 5,
  },
  {
    name: "Tablet",
    price: 200,
    stock: 8,
  },
];
// looping array of object
// for (let i = 0; i < produk.length; i++) {
//   console.log(`\nNama Produk: ${produk[i].name}`);
//   console.log(`Harga Produk: ${produk[i].price}`);
//   console.log(`Stok Produk: ${produk[i].stock}`);
// }

// .map()
// let namaProduk = produk.map(item => item.name)
// console.log(namaProduk);

// .filter()
let stokBanyak = produk.filter(item => item.stock >= 8)
console.log(stokBanyak);


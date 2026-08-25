let mahasiswa = {
  name: "Faiz Ali Sidiq",
  jurusan: "Teknik Informatika",
  age: 22,
  gender: "Laki-laki",
  salam: function () {
    return `Halo nama saya adalah ${this.name}`;
  },
};

for (let i in mahasiswa) {
  console.log(`${i} : ${mahasiswa[i]}`);
}

console.log(mahasiswa.salam());

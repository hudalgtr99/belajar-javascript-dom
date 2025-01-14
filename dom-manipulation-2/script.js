// DOM manipulation

// // appendChild = memasukkan node/child di akhir parentnya

// Buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

//Simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// // insertBefore
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)'); // Versi panjang
const li2 = ul.querySelector('li:nth-child(2)'); // versi singkat untuk mengambil li (list) urutan kedua/ li2

// Pada parent ul, liBaru di masukkan sebelum li2
ul.insertBefore(liBaru, li2);


// Menghapus link a href pada salah satu node di sectionA
const link = document.getElementsByTagName('a')[0]; // mengambil tag a pertama
sectionA.removeChild(link); //menghapus link ke arah tag a


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p'); //paragraf pertama pada section b

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

// h2Baru mereplace p4 (paragraf 4) yang ada di sectionB
sectionB.replaceChild(h2Baru, p4);
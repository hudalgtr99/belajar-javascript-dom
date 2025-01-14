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

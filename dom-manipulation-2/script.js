// DOM manipulation

// Buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

//Simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);
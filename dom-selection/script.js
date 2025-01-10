// DOM Selection
// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'cyan';

// Di javascript jangan gunakan strip untuk
// 2 kata seperti background-color. Tapi gunakan
// camelCase menjadi backgroundColor.
judul.style.backgroundColor = '#ccc';

judul.innerHTML = "Miftahul Huda Guntara";

// document.getElementsByTagName()
// return nilai HTMLCollection (dalam bentuk array)
const p = document.getElementsByTagName('p');

// HTML Collection bersifar array, sehingga
// perlu menambahkan index keberapanya disamping
// element p, seperti p[0], p[1], dst
p[2].style.backgroundColor = 'lightblue';

// cara mengubah sekaligus element yg ada
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'pink';
}

// Jika hanya ada 1 nilai pada array, bisa langsung
// memberikan nilai index 0 disamping syntax agar
// tidak perlu mengulanginya lagi
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';
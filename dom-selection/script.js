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
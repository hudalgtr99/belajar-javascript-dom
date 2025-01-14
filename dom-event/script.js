// const p3 = document.querySelector('.p3');

// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2; // ubahWarna tidak perlu menggunakan kurung agar tidak langsung dirun ketika belum diklik


// // // addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// })


const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }
// // disaat terdapat dua buah function untuk event handler. 
// // Maka, hanya function terakhir yang akan dijalankan, dan mengabaikan function2 sebelumnya

//AddEventListener akan menjalankan semua function yg ada secara bersamaan meskipun lebih dari 1
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function(){
    p3.style.color = 'red';
});

// const close = document.querySelector('.close');

// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     // card.remove(); //Menghapus
//     card.style.display = 'none'; //menutup
// });



// // // DOM Traversal

// //Cara yang salah
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(){
//         card[i].style.display = 'none';
//     });
// }


// //Cara yang benar (sesuai traversal)
const close = document.querySelectorAll('.close');


// //Contoh perulangan ke-1
// for(let i = 0; i < close.length; i++){

//     // // Cara simple
//     // close[i].addEventListener('click', function(){
//     //     close[i].parentElement.style.display = 'none';
//     // }); 

//     // Cara yang benar
//     close[i].addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     });
// }

//Contoh Perulangan ke-2
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});

const nama = document.querySelector('.nama');
console.log(nama.parentNode); //Return card
console.log(nama.nextSibling); //Return #text karna node sesudahnyaa adalah 'enter'
console.log(nama.nextElementSibling.nextElementSibling); //Return telp
console.log(nama.previousElementSibling); //Return null, karna tidak ada kakak dari si name

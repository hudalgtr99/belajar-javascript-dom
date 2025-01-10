// DOM Selection
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// document.querySelector()

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// Hanya paragraf/p yg pertama kali ditemukan yang diubah
const p1st = document.querySelector('p');
p1st.innerHTML = 'Ini diubah melalui Javascript';

// document.querySelectorAll()
const p = document.querySelectorAll('p');

// ini mengubah satuan
p[2].style.backgroundColor = 'lightblue';

// ini mengubah semuanya sekaligus
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'cyan';
}



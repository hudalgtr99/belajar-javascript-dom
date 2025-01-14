const p3 = document.querySelector('.p3');

function ubahWarna(){
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna; // ubahWarna tidak perlu menggunakan kurung agar tidak langsung dirun ketika belum diklik


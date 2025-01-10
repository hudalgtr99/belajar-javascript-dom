// // element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em> Miftahul Huda Guntara </em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world'; //Mengubah seluruh section A hanya dengan hello world


// // element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// // element.setAttribute()
// // element.getAttribute()
// // element.removeAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

// a.getAttribute('href'); 
// judul.setAttribute('name', 'miftah');

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label'); //ini akan menimmpa class p2 yg telah ada menjadi label


// // element.classList
// // element.classList.add()
// // element.classList.remove()
// // element.classList.toggle()
// // element.classList.item()
// // element.classList.contains()
// // element.classList.replace()

const p2 = document.querySelector('.p2');
p2.classList.add('label'); //menambah class pada p2 yaitu label
p2.classList.remove('label'); //menghapus class pada p2 yaitu label
p2.classList.toggle('label'); //menambah class label (jika tidak ada/True), menghapus class label (jika ada/false)

p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');
p2.classList.item(2); //mengembalikan nilai urutan class ke-2 yaitu satu(0 = p2, 1 = label, 2 = satu, dst)

p2.classList.contains('dua'); //return True (jika ada class bernama dua)

p2.classList.replace('label', 'empat'); //menggantikan class label menjadi class empat
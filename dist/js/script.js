// Navbar Fixed ketika discrol
// js akan mencari elemen header 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; //navbar yg fixed mengambil jarak dari header ke batas atas (harusnya 0 nempel paling atas)

    if(window.pageYOffset > fixedNav) { 
        header.classList.add('navbar-fixed') //jika jarak lebih besar dari fixedNav(0) maka dijalankan class baru di headernya navbar-fixed
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
//js akan mencari elemen dengan nama kelas hamburger (id)
const hamburger = document.querySelector('#hamburger');
//js mencari elemen yg punya kelas nav-menu
const navMenu = document.querySelector('#nav-menu')

//ketika hamburger di klik akan dijalankan function dari class hamburger-active
//toogle, ketika diklik kalau ada kelasnya hilangkan, kalau tidak ada kelasnya akan menambahkan class
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden'); //menyembunyikan navMenu
});
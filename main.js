const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

//menu
// navToggle.addEventListener('click', () => {
// navMenu.classList.add('show-menu')
// });

// navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu')
// })
//stik kısmı
window.addEventListener('scroll', function(){
header.classList.toggle("sticky", window.scrollY > 90);
});


//arama
/*const search = document.getElementById('search'),
searchBtn =document.getElementById('search-btn'),
searchClosen = document.getElementById('search-close')

//search show
searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
})

searchClosen.addEventListener('click', () => {
    search.classList.remove('show-search')
})*/


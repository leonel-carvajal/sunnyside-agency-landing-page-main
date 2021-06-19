const menuHam = document.querySelector('.header--hamburguer')
const menu = document.querySelector('.menu--header')

menuHam.addEventListener('click',()=>{
  menu.classList.toggle('active')
  menu.classList.contains('active')
  ? menuHam.setAttribute('src','images/IconClose.svg')
  :menuHam.setAttribute('src','images/icon-hamburger.svg')
})
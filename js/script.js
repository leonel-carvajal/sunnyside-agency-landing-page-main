const menuHam = document.querySelector('.header--hamburguer')
const menu = document.querySelector('.menu--header')

menuHam.addEventListener('click',()=>{
  menu.classList.toggle('active')
  if(menu.classList.contains('active')){
    menuHam.src = 'images/IconClose.svg'
  }else{
    menuHam.src = 'images/icon-hamburger.svg'
  }
})
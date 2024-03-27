'use restric'

const nav = document.querySelector('.nav')
const Menu = document.querySelector('.Menu')

Menu.addEventListener('click', () => {
    nav.classList.toggle('ativo')
    Menu.classList.toggle('ativo')
})
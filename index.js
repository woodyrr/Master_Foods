let openMenu = document.getElementById('openMenu')
let navOptions = document.querySelector('.nav-options')
openMenu.addEventListener('click', () => {
    navOptions.classList.toggle('hidden')
})
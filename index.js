let openMenu = document.getElementById('openMenu')
let navOptions = document.querySelector('.nav-options')
let main = document.getElementById('main')
let closeMenu = document.getElementById('closeMenu')
let header = document.getElementById('head')
openMenu.addEventListener('click', () => {
    // header.classList.toggle('hidden')

    main.classList.toggle('active')
})
closeMenu.addEventListener('click', () => {
    // header.classList.toggle('hidden')
    main.classList.toggle('active')
})


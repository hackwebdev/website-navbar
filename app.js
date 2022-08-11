// nav toggle - select button and links
const navToggle = document.querySelector('#navToggle')
const nav = document.querySelector('#nav-links')
const hamburger = document.querySelector('.nav-toggle')

// add event listener
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open')
})

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active')
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1.5
    },
    600: {
      items: 3.5
    },
    1000: {
      items: 5.5
    }
  }
})
const divOwlNav = document.querySelectorAll('.owl-nav')
console.log(divOwlNav)
for (const element of divOwlNav) {
  const prev = element.querySelector('.owl-prev')
  const next = element.querySelector('.owl-next')

  prev.innerHTML = ''
  prev.classList.add('icon-ArrowLeft')

  next.innerHTML = ''
  next.classList.add('icon-ArrowRight')
}

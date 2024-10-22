function closeMenuAndGoTo(query) {
  document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')
  setTimeout(() => {
    const element = document.querySelector(query)
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }, 250);
}

document.querySelector('#hero-menu').
  querySelectorAll('[href]').
  forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault()
      closeMenuAndGoTo(link.getAttribute('href'))
    }
  })

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,  // Ajuste conforme o desejado
    spaceBetween: 30,  // Ajuste o espaçamento entre slides
  });
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show');

});

// window.sr = ScrollReveal({ reset: true });

window.sr = ScrollReveal();
// viewFactor: 0.1
sr.reveal('.showcase', { 
    delay:500
  });

  sr.reveal('.news-cards-one', { 
    delay:500
  });

  sr.reveal('.cards-banner-one', { 
    delay:500
  });

  sr.reveal('.news-cards-two', { 
    delay:500
  });

  sr.reveal('.cards-banner-two', { 
    delay:500
  });



// ScrollReveal().reveal('.showcase', {
//     delay: 500,
//     useDelay: 'onload',
//     reset: true,
// });

// ScrollReveal().reveal('.news-cards-one', {
//     delay: 500,
//     useDelay: 'onload',
//     reset: true,
// });

// ScrollReveal().reveal('.cards-banner-one', {
//     delay: 500,
//     useDelay: 'onload',
//     reset: true,
// });

// ScrollReveal().reveal('.news-cards-two', {
//     delay: 500,
//     useDelay: 'onload',
//     reset: true,
// });

// ScrollReveal().reveal('.cards-banner-two', {
//     delay: 500,
//     useDelay: 'onload',
//     reset: true,
// });



const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show');

});

window.sr = ScrollReveal({ reset: true });

sr.reveal('.showcase', { 
    viewFactor: 0.5
  });

  sr.reveal('.news-cards-one', { 
    viewFactor: 0.5
  });

  sr.reveal('.cards-banner-one', { 
    viewFactor: 0.5
  });

  sr.reveal('.news-cards-two', { 
    viewFactor: 0.5
  });

  sr.reveal('.cards-banner-two', { 
    viewFactor: 0.5
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



$(function(){

  $('.search__input--small').on('click', function(){

    $('.result--small').addClass('result--opacity-small');

  });

  $(document).click(function(e){ 

    var input = $(".search"); 

    if(e.target!=input[0]&&!input.has(e.target).length){ 

      $('.result').removeClass('result--opacity-small');
    } 
  
  }); 

  $('.news__select-link').on('click', function(e){

    e.preventDefault();
    $('.news__select-link').removeClass('news__select-link--active');
    $(this).addClass('news__select-link--active');

    $('.news__wrapper').removeClass('news__wrapper--active');
    $($(this).attr('href')).addClass('news__wrapper--active');

  });

  $('.news__select-link').on('click', function(e){

    e.preventDefault();

    $('.news__select-link-top').removeClass('news__select-link-top--active');
    $($(this).attr('data-chang')).addClass('news__select-link-top--active');

  });

  $('.news__select-box').on('click', function(){

    $('.news__small-select').toggleClass('news__small-select--hidden');

  });

  $(document).click(function(e){ 

    var elem = $(".news__small-label"); 

    if(e.target!=elem[0]&&!elem.has(e.target).length){ 

      $('.news__small-select').removeClass('news__small-select--hidden');

    } 
  
  }); 

  $('.menu__item-page-arrow').on('click', function(){

    $(this).toggleClass('menu__item-page-arrow--active');
    $('.menu__item-inner').slideToggle().css('display','flex');

  });
  
  $('.search__icon').on('click', function(){

    $(this).addClass('search__icon--hidden');
    $(this).fadeOut();
    $('.search__label').fadeIn();
    $('.search__label').addClass('search__label--active');
    $('.search__label').removeClass('search__label--hidden');
    $('.result').addClass('result--opacity');

  });

  // $('.search__icon--first-window').on('click', function(){

  //   $('.logo').addClass('logo--first-window');

  // });

  // $('.search__close--first-window').on('click', function(){

  //   $('.logo').removeClass('logo--first-window');

  // });

  const result = document.querySelector('.search__icon');

  result.addEventListener('click', functtt);

  function functtt() {

    setTimeout(function() {

      document.querySelector('.result').classList.add('result--hidden');

    }, 200);

  }

  const close = document.querySelector('.search__close');

  close.addEventListener('click', closeInput);

  function closeInput() {

    setTimeout(function() {

      document.querySelector('.result').classList.remove('result--hidden');

    }, 200);

  }

  const search = document.getElementById('search__icon');

  search.addEventListener('click', funct);

  function funct() {

    setTimeout(function() {

      document.getElementById('search').classList.toggle('search--active');

    }, 10);

  }

  $('.search__close').on('click', function(){

    $('.search__label').addClass('search__label--hidden');
    $('.search__label').removeClass('search__label--active');
    $('.search__icon').fadeIn().css('display','flex');
    $('.search__icon').removeClass('search__icon--hidden');
    $('.search').removeClass('search--active');
    $('.result').removeClass('result--opacity');

  });

  $('.menu-btn__btn').on('click', function(){

    $('.menu__content').toggleClass('menu__content--active');
    $('.menu-btn__icon').toggleClass('menu-btn__icon--active');
    $('.menu__content-main').toggleClass('menu__content--active-main');

  });

  $('.news__division-inner').on('click', function(e){

    e.preventDefault();
    $('.news__division-inner').removeClass('news__division-inner--active');
    $(this).addClass('news__division-inner--active');

    $('.news__wrapper').removeClass('news__wrapper--active');
    $($(this).attr('href')).addClass('news__wrapper--active');

  });

});

var swiperOne = new Swiper(".swiper-one", {

  slidesPerView: 1,
  effect: "fade",
  speed: 1000,
  pagination: {
    el: ".first-window__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".first-window__next",
    prevEl: ".first-window__prev",
  },

});

var swiperTwo = new Swiper(".swiper-two", {

  slidesPerView: 1,
  effect: "fade",
  speed: 700,
  pagination: {
    el: ".about__pagination",
    clickable: true,
  },

});

var swiperThree = new Swiper(".swiper-three", {

  slidesPerView: 1,
  direction: "vertical",
  effect: "fade",
  speed: 700,
  pagination: {
    el: ".project__pagination",
    clickable: true,
  },
  mousewheel: {
    sensivity: 1,
  },

});

var swiperFour = new Swiper(".swiper-four", {

  slidesPerView: 1,
  effect: "fade",
  speed: 700,
  pagination: {
    el: ".project-card__pagination",
    clickable: true,
  },

});

var swiperFive = new Swiper(".swiper-five", {

  slidesPerView: 1.3,
  spaceBetween: 27,
  loop: true,
  speed: 200,
  centeredSlides: true,
  pagination: {
    el: ".gallery__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensivity: 1,
  },
  breakpoints: {
    390: {
      spaceBetween: 15,
      speed: 700,
    },
    430: {
      spaceBetween: -50,
      speed: 700,
    },
    575: {
      spaceBetween: -170,
      speed: 700,
    },
    991: {
      spaceBetween: -50,
      speed: 700,
    },
    1150: {
      spaceBetween: -200,
      speed: 700,
    },
    1350: {
      spaceBetween: -21,
      speed: 700,
    },
    1400: {
      spaceBetween: -51,
      speed: 700,
    },
  }

});

$('.swiper-six').each(function() {
    $this = $(this);
    $parent = $(this).parent();
    let swiper = new Swiper($this.get(0), {
  
      effect: "fade",
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: $('.project-two__pagination', $parent).get(0),
        clickable: true,
      },
    
    });
    
  });
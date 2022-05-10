//accordion

const accordBox = document.querySelectorAll('.accord__box');

for (let i = 0; i<accordBox.length; i++) {
	accordBox[i].addEventListener('click', function(){
		this.classList.toggle('active');
	});
}


//modal

const modalClose = document.querySelectorAll('.modal__close'),
toBook = document.querySelectorAll('#book'),
bookNow = document.querySelector('#bookNow'),
send = document.querySelectorAll('#send'),
haveQ = document.querySelector('#haveQ'),
btnQuest = document.querySelector('.btn__quest'),
btnRefresh = document.querySelector('#refresh'),
contactInput = document.querySelectorAll('.contact__input'),
modalArea = document.querySelectorAll('.modal__area'),
modalCheck = document.querySelectorAll('.modal__check');


const refresh = () =>{
  contactInput.forEach( (item) =>{
    item.value = '';
  });

   modalArea.forEach( (item) =>{
    item.value = '';
  });

   modalCheck.forEach( (item) =>{
    item.checked = false;
  });
}

const closeModal = (event) =>{
  const target = event.target;
  if (target.classList.contains('modal') || target.classList.contains('modal__close') || target.classList.contains('modal__close--img') || target.classList.contains('btn__modal')) {
    target.closest('.modal').classList.add('hidden');
    refresh();
  }
};

toBook.forEach( (item) =>{
  item.addEventListener('click', () =>{
    bookNow.classList.remove('hidden');
  });
});

btnQuest.addEventListener('click', () =>{
  haveQ.classList.remove('hidden');
});

btnRefresh.addEventListener('click', refresh);

document.addEventListener('click', closeModal);


/*header*/

const header = $('.header');
let introHeight = $('.intro').innerHeight();
let scrollOffset = $(window).scrollTop();

function checkScroll(scrollOffset){
  if (scrollOffset >= introHeight) {
    header.addClass('fixed');
  } else{
    header.removeClass('fixed');
  }
}

$(window).on('scroll', function(){
  scrollOffset = $(this).scrollTop();
  checkScroll(scrollOffset);
});


/*burger*/

const hiddenMenu = document.querySelector('#hidden-menu');

$('.nav-toggle').on('click', function(event){
  event.preventDefault();
  $(this).toggleClass('focused');
  $(hiddenMenu).toggleClass('focused');
 
  if (hiddenMenu.classList.contains('focused')) {
    
    $(hiddenMenu).animate({
      "left": "-170px"
    }, 200);

  } else{
    
    $(hiddenMenu).animate({
      "left": 0
    }, 500);

  }  
});


//textarea

modalArea.forEach(item => {
    let textAreaH = item.offsetHeight;
    
    item.addEventListener('input', event => {
        let $this = event.target;
        
        $this.style.height = $this.scrollHeight + 'px';
    });
});


/*scroll*/


$(function(){
  checkScroll(scrollOffset);


$('[data-scroll]').on('click', function(event){
  event.preventDefault();

  let $this = $(this);
  let blockId = $this.data('scroll');
  let blockOffset = $(blockId).offset().top;

  $('.nav a').removeClass('nav__active');
  $this.addClass('nav__active');

  $(hiddenMenu).animate({
    "left": "-170px"
  }, 200);
  $('.nav-toggle').toggleClass('focused');
  $(hiddenMenu).toggleClass('focused');

  $('html, body').animate({
    scrollTop: blockOffset
  }, 2000);
});


});


//AOS

AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
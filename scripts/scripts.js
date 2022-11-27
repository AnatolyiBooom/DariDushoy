var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 4000,
  autoplay: {
   
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true
});


$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
          active: 0 ,
          heightStyle: "content"
  });
} );


let accordions = document.querySelectorAll('.quest__header');


accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    let self = e.currentTarget;

    self.classList.toggle('quest__header--open');
   
  });
});



const validate = new JustValidate('#formAplication' ,{
  errorLabelStyle: {
    color: '#FF6F6F',
    borderColor: 'red'
  }
})


validate
  .addField('#userName', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Ошибка',
    },

    {
      rule: 'required', 
      errorMessage : 'Введите своё имя'
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])

  validate
  .addField('#userTel', [


    {
      rule: 'required', 
      errorMessage : 'Введите номер телефона'
    },      
    {
      rule: 'minLength',
      value: 8,
      errorMessage: 'Ошибка при вводе',
    },   
    
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Ошибка в пароле',
    }, 
  ]);

  
  validate
  .addField('#userText', [


    {
      rule: 'required', 
      errorMessage : 'Оставьте Свой комментарий'
    },      
    {
      rule: 'minLength',
      value: 8,
      errorMessage: 'Ошибка при вводе',
    },   
    
  
  ]);

  validate
  .addField('#consent_checkbox', [
    {
      rule: 'required',
      errorMessage : 'Согласны?'
    },
  ]);


let enterBtn = document?.querySelector('.horse-btn');
let flyBtn = document?.querySelector('.fly__btn');
let aeroBtn = document?.querySelector('.aero__btn');
let yachtBtn = document?.querySelector('.yacht__btn');
let picnicbtn = document?.querySelector('.picnic__btn');
let driveBtn = document?.querySelector('.drive__btn');
let songBtn = document?.querySelector('.song__btn');
let swampBtn = document?.querySelector('.swamp__btn');
let gameBtn = document?.querySelector('.game__btn');
let romanticBtn = document?.querySelector('.romantic__btn')
let walk = document?.querySelector('.walk');
let fly = document?.querySelector('.fly');
let aero = document?.querySelector('.aero');
let evening = document?.querySelector('.evening');
let yacht = document?.querySelector('.yacht');
let picnic = document?.querySelector('.picnic');
let drive = document?.querySelector('.drive');
let song = document?.querySelector('.song');
let swamp = document?.querySelector('.swamp');
let game = document?.querySelector('.game');
let romantic = document?.querySelector('.romantic');
let eveningBtn = document?.querySelector('.evening__btn');
let btnClose = document?.querySelectorAll('[data-close]');
let btnForm = document?.querySelectorAll('[data-open]');
let openForm = document?.querySelector('[data-active]');
let body = document.querySelector('body');
let closeForm = document.querySelector('.application__close');
let openBrgr = document.querySelector('.header__burger');
let closeBrgr = document.querySelector('.header__close');
let openBlock = document.querySelector('.header__list');
let navLink = document.querySelectorAll('.header__link');

  
navLink.forEach(link => {
  link.addEventListener('click', () => {
  body.classList.remove('stop-scroll');
  openBrgr?.classList.remove('burger--active');
  openBlock?.classList.remove('header-list--active');
      });
  });

closeBrgr?.addEventListener('click', () => {
  closeBrgr?.classList.remove('header-btn--active');
  openBlock?.classList.remove('header-list--active');
  body.classList.remove('stop-scroll');
});

openBrgr?.addEventListener('click', () => {
  openBrgr?.classList.add('burger--active');
  openBlock?.classList.add('header-list--active');
  body.classList.add('stop-scroll');
});


// body.addEventListener('click', function() {
//   openBlock.classList.remove('header-list--active');
//   closeBrgr?.classList.remove('header-btn--active');
//   openBlock?.classList.remove('header-list--active');
//   body.classList.remove('stop-scroll');

// });


// body?.addEventListener('click', () => {
//   openBlock?.classList.remove('header-list--active');

// });


btnForm.forEach(btn => {
  btn.addEventListener('click', () => {
    // btnForm?.classList.add('btn--active');
    openForm?.classList.add('application--active');
    body.classList.add('stop-scroll');
 
      });
  });

  closeForm?.addEventListener('click', () => {
    closeForm?.classList.add('close--active');
    openForm?.classList.remove('application--active');
    body.classList.remove('stop-scroll');
  });

  romanticBtn?.addEventListener('click', () => {
    romanticBtn?.classList.toggle('romantic-btn--active');
    romantic?.classList.add('romantic--active');
    body.classList.add('stop-scroll');
  
  });

  gameBtn?.addEventListener('click', () => {
    gameBtn?.classList.toggle('game-btn--active');
    game?.classList.add('game--active');
    body.classList.add('stop-scroll');
  
  });

  swampBtn?.addEventListener('click', () => {
    swampBtn?.classList.toggle('swamp-btn--active');
    swamp?.classList.add('swamp--active');
    body.classList.add('stop-scroll');
  
  });

  songBtn?.addEventListener('click', () => {
    songBtn?.classList.toggle('song-btn--active');
    song?.classList.add('song--active');
    body.classList.add('stop-scroll');
  
  });

  driveBtn?.addEventListener('click', () => {
    driveBtn?.classList.toggle('drive-btn--active');
    drive?.classList.add('drive--active');
    body.classList.add('stop-scroll');
  
  });

  picnicbtn?.addEventListener('click', () => {
    picnicbtn?.classList.toggle('picnic-btn--active');
    picnic?.classList.add('picnic--active');
    body.classList.add('stop-scroll');
  
  });

  yachtBtn?.addEventListener('click', () => {
    yachtBtn?.classList.toggle('yacht-btn--active');
    yacht?.classList.add('yacht--active');
    body.classList.add('stop-scroll');
  
  });

eveningBtn?.addEventListener('click', () => {
  eveningBtn?.classList.toggle('eveningBtn--active');
  evening?.classList.add('evening--active');
  body.classList.add('stop-scroll');

});

enterBtn?.addEventListener('click', () => {
  enterBtn?.classList.toggle('horse-btn--active');
  walk?.classList.add('walk--active');
  body.classList.add('stop-scroll');

});

flyBtn?.addEventListener('click', () => {
  flyBtn?.classList.toggle('fly-btn--active');
  fly?.classList.add('fly--active');
  body.classList.add('stop-scroll');

});

aeroBtn?.addEventListener('click', () => {
  aeroBtn?.classList.toggle('aeroBtn--active');
  aero?.classList.add('aero--active');
  body.classList.add('stop-scroll');

});



btnClose.forEach(el => {
  el.addEventListener('click', () => {
  // btnClose.classList.toggle('btn--close')
  walk?.classList.remove('walk--active');
  fly?.classList.remove('fly--active');
  aero?.classList.remove('aero--active');
  evening?.classList.remove('evening--active');
  yacht?.classList.remove('yacht--active');
  picnic?.classList.remove('picnic--active');
  body.classList.remove('stop-scroll');
  drive?.classList.remove('drive--active');
  song?.classList.remove('song--active');
  swamp?.classList.remove('swamp--active');
  game?.classList.remove('game--active');
  romantic?.classList.remove('romantic--active');
      });
  });

  // body.forEach(el => {
  //   el.addEventListener('click', () => {
  //     walk?.classList.remove('walk--active');
  //     fly?.classList.remove('fly--active');
  //     aero?.classList.remove('aero--active');
  //     evening?.classList.remove('evening--active');
  //     body.classList.add('open--body')
  //   });
  // });

 


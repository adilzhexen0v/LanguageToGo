window.addEventListener('DOMContentLoaded', function(){
     /* Slider */
     const slider = document.querySelector('.all__courses__list');
     const sliderDotsBlock = document.querySelector('.all__courses__dots');
     const sliderDots = document.querySelectorAll('.all__courses__dot');
     const firstDot = sliderDots[0];
     const secondDot = sliderDots[1];
     sliderDotsBlock.addEventListener('click', function(e){
          if(e.target === firstDot) {
               firstDot.classList.add('active__dot');
               secondDot.classList.remove('active__dot');
               slider.classList.remove('all__courses__slider__move');
          } else if (e.target === secondDot) {
               secondDot.classList.add('active__dot');
               firstDot.classList.remove('active__dot');
               slider.classList.add('all__courses__slider__move');

          }
     });

     /* Tabs */
     const tabsBtns = document.querySelectorAll('.testimonials__slider__dot');
     const tabsLists = document.querySelectorAll('.testimonials__slider__item');
     tabsBtns.forEach((element, index) => {
          element.addEventListener('click', function(){
               tabsBtns.forEach((element, i) => {
                    element.classList.remove('active__dot');
                    tabsLists[i].classList.remove('show', 'fade');
               });
               element.classList.add('active__dot');
               tabsLists[index].classList.add('show', 'fade');
          });
     });
});

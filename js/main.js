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
     
     /* FAQ */
     const faqItems = document.querySelectorAll('.faq__item');
     const faqBtns = document.querySelectorAll('.question__open');
     const faqAnswers = document.querySelectorAll('.answer');
     function changeFaqBtn(btn){
          if (btn.classList.contains('question__close')) {
               btn.textContent = '-';
          } else {
               btn.textContent = '+';
          }
     }
     function closeFaq(){
          faqItems.forEach(item => {
               item.classList.remove('faq__active');
          });
          faqBtns.forEach(btn => {
               btn.classList.remove('question__close');
          });
          faqAnswers.forEach(answer => {
               answer.classList.remove('answer__show', 'answer__fade');
          });
     }
     function openFaq(index){
          faqItems[index].classList.add('faq__active');   
          faqBtns[index].classList.add('question__close');   
          faqAnswers[index].classList.add('answer__show', 'answer__fade');
     }
     faqBtns.forEach((faqBtn, index) => {
          faqBtn.addEventListener('click', function(){
               if (faqBtn.classList.contains('question__close')){
                    closeFaq(index);
                    changeFaqBtn(faqBtns[index]);
               } else {
                    for(let i = 0; i < faqBtns.length; i++) {
                         closeFaq();
                    }
                    openFaq(index);
                    faqBtns.forEach(btn => {
                         changeFaqBtn(btn);
                    });
               }
          });
     });
});

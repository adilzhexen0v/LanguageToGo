document.addEventListener('DOMContentLoaded', () => {
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
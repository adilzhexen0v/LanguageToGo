window.addEventListener('DOMContentLoaded', function(){
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

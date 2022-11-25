window.addEventListener('DOMContentLoaded', () => {
     const windowWidth = window.screen.width;
     const slider = document.querySelector('.all__courses__slider');
     const sliderContainer = document.querySelector('.all__courses__row');
     const sliderCards = document.querySelectorAll('.all__courses__card');
     const prevBtn = document.querySelector('#prev__btn');
     const nextBtn = document.querySelector('#next__btn');
     let sliderGap = 40;
     if (windowWidth <= 660) {
          sliderGap = 20;
     } else if (windowWidth <= 1440) {
          sliderGap = 30;
     }
     let sliderCardWidth = window.getComputedStyle(sliderCards[0]).width.slice(0, -2); 
     let sliderOffset = 0;
     let maxOffset = 3;
     if (windowWidth <= 660) {
          maxOffset = 5;
     } else if (windowWidth <= 1200) {
          maxOffset = 4;
     }
     console.log(sliderCardWidth);
     prevBtn.addEventListener('click', () => {
          if (sliderOffset != 0) {
               sliderOffset--;
               moveSlider(sliderOffset, sliderCardWidth);
          }
     });
     nextBtn.addEventListener('click', () => {
          if (sliderOffset !== maxOffset) {
               sliderOffset++;
               moveSlider(sliderOffset, sliderCardWidth);
          }
     });
     const moveSlider = (offset, width) => {
          const moveWidth = (Number(sliderGap) + Number(width)) * offset;
          console.log(moveWidth);
          sliderContainer.style.transform = `translateX(-${moveWidth}px)`;
     };
});
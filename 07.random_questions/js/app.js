// catch all accrodions 
let allAccordions = document.querySelectorAll('.accordion-box');


// loop on all accordions
allAccordions.forEach((accordion) => {

  // click listeners
    accordion.addEventListener('click', () => {

      // remove not matching item
      allAccordions.forEach((item) => {
        if(item !== accordion){
          item.classList.remove('show-content');
        }
      });

      // add a toggle class name
        accordion.classList.toggle('show-content');
    });
});

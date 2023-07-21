document.querySelectorAll(".accordion .description").forEach(element => {
  element.style.display = 'none';
});

let accordionTitleElement = document.querySelectorAll(".accordion");
accordionTitleElement.forEach(element => {
  element.addEventListener("click", function () {
    let accordionParentElement = element.parentElement.parentElement;
    let accordionDescriptionElement = accordionParentElement.querySelector('.description');
    let accordionArrowDown = accordionParentElement.querySelector(".expand-icon");
    let accordionArrowTop = accordionParentElement.querySelector(".collapse-icon");

    if (accordionDescriptionElement) {
      if (accordionDescriptionElement.style.display === "none") {
        accordionDescriptionElement.style.display = 'block';

        if (accordionArrowDown && accordionArrowTop) {
          accordionArrowDown.style.display = "block";
          accordionArrowTop.style.display = "none";
        }

      } else {
        accordionDescriptionElement.style.display = 'none';

        if (accordionArrowDown && accordionArrowTop) {
          accordionArrowDown.style.display = "none";
          accordionArrowTop.style.display = "block";
        }
      }
    }
  });
});
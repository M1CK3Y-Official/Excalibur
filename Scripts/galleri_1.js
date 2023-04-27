/*loade teck*/
/*===============================================================================*/
console.log("shit works!");

/*slider code*/
/*===============================================================================*/
const slider = document.querySelector(".slider");
firstImage = slider.querySelectorAll(".skideImg")[0];
const sliderBtns = document.querySelectorAll(".slider-btns");

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDrift;


firstImage.addEventListener("load", function () {
  let firstImageWidth = firstImage.clientWidth;

  sliderBtns.forEach((button) => {
    button.addEventListener("click", function () {
      console.log('click')
      if (button.id == "left") {
        slider.scrollLeft -= firstImageWidth;
      } else {
        slider.scrollLeft += firstImageWidth;
      }
    });
  });
  
  const autoSlide = () => {
    positionDrift = Math.abs(positionDrift);
    let firstImageWidth = 300 + 16;
    let valDifference = firstImageWidth - positionDrift;

    if (positionDrift > firstImageWidth ) {
      slider.scrollLeft += valDifference;
    } else {
      slider.scrollLeft -= valDifference;
    }
  };
  
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    slider.classList.add("dragging");
    positionDrift = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDrift;
  };

  const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");
    autoSlide();
  };

  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("mouseup", dragStop);
  slider.addEventListener("mouseleave", dragStop);

  slider.addEventListener("touchstart", dragStart);
  slider.addEventListener("touchmove", dragging);
  slider.addEventListener("touchend", dragStop);
});

/* image slider ↑  card slider ↓ */
/*-------------------------------------------------------------------------------*/

const cardSlider = document.querySelector(".doc-card-slider");
firstCard = cardSlider.querySelectorAll(".skideCard")[0];
const cardSliderBtns = document.querySelectorAll(".card-slider-btns");


  let firstImageWidth = firstCard.clientWidth;

  cardSliderBtns.forEach((button) => {
    button.addEventListener("click", function () {
      console.log('click')
      if (button.id == "left") {
        cardSlider.scrollLeft -= firstImageWidth;
      } else {
        cardSlider.scrollLeft += firstImageWidth;
      }
    });
  });

  const autoSlide = () => {
    positionDrift = Math.abs(positionDrift);
    let firstImageWidth = 300;
    let valDifference = firstImageWidth - positionDrift;

    if (positionDrift > firstImageWidth / 2) {
      cardSlider.scrollLeft += valDifference;
    } else {
      cardSlider.scrollLeft -= valDifference;
    }
  };

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = cardSlider.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    cardSlider.classList.add("dragging");
    positionDrift = (e.pageX || e.touches[0].pageX) - prevPageX;
    cardSlider.scrollLeft = prevScrollLeft - positionDrift;
  };

  const dragStop = () => {
    isDragStart = false;
    cardSlider.classList.remove("dragging");
    autoSlide();
  };

  cardSlider.addEventListener("mousedown", dragStart);
  cardSlider.addEventListener("mousemove", dragging);
  cardSlider.addEventListener("mouseup", dragStop);
  cardSlider.addEventListener("mouseleave", dragStop);

  cardSlider.addEventListener("touchstart", dragStart);
  cardSlider.addEventListener("touchmove", dragging);
  cardSlider.addEventListener("touchend", dragStop);
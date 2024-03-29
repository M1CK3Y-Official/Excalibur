var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var spriteSheet = new Image();
spriteSheet.src = "img/walkingsim2-01.png"; // Sti til dit spritesheet-billede
var frameWidth = 200; // Bredde af hvert billede i spritesheetet
var frameHeight = 275; // Højde af hvert billede i spritesheetet
var frameCount = 4; // Antal billeder i spritesheetet
var currentFrame = 0; // Aktuelt rammeindeks
var scrollTop = 0; // Scrolltop-værdi

window.addEventListener("scroll", animateSprite);
window.addEventListener("load", animateSprite); // Kald animateSprite manuelt når siden er indlæst

function animateSprite() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  currentFrame = Math.floor(scrollTop / frameHeight) % frameCount; // Beregn det aktuelle rammeindeks

  // Ryd canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Tegn den aktuelle ramme fra spritesheetet
  ctx.drawImage(
    spriteSheet,
    0,
    currentFrame * frameHeight,
    frameWidth,
    frameHeight,
    0,
    0,
    frameWidth,
    frameHeight
  );

  // Gentag animationen
  requestAnimationFrame(animateSprite);
}


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var imageContainer = document.querySelector(".image-container");
var image = document.querySelector(".image-container img");

window.addEventListener("scroll", function (event) {
  if (isElementInViewport(imageContainer)) {
    image.style.transform = "translateX(-160%)";
    
  }
});


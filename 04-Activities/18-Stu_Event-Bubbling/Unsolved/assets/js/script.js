// TODO: Which element is the following line of code selecting?
// The first element that is a member of the class carouselbox
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// The first element that is a member of the class next
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// when the carousel object is clicked, a function is run that allows the user to view the current image
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// When the next object is clicked, a function is run that displays the next image
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // This prevents the event from bubbling all the way up the tree
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// When the prev object is clicked, a function is run that displays the previous image
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // This prevents the event from bubbling all the way up the tree
  event.stopPropagation();

  navigate(-1);
});

navigate(0);

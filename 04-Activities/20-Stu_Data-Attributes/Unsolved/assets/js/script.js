var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
    // var state = element.getAttribute("data-state");

    if (element.dataset.state === "hidden") {
      element.textContent = element.dataset.number;
      element.dataset.state = "display";
    }
    else {
      element.textContent = "";
      element.dataset.state = "hidden";
    }
  
});

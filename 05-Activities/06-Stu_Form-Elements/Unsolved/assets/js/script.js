var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
let button = $(".btn btn-info");
let input = $("#shopping-input");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
shoppingFormEl.on("submit", function() {
    event.preventDefault();
    // let listItem = $("<li>");
    // listItem.text(input.val());
    shoppingListEl.append("<li>" + input.val() + "</li>");
    
    console.log("function");
})



// TODO: Add an event listener to the `shoppingFormEl` to handle submission

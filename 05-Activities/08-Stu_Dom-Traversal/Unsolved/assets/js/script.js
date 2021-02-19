// Assemble: Create/select DOM elements
var rootEl = $('#root');

// console.log($(".item-b2").parent());
// console.log($(".item-b2").closest());
// console.log($(".item-b2").parent("main"));


JSON.stringify();

// TODO: Starting from the root element, select all the boxes and turn them white in a single statement.
// HINT: Use the `.css` function to change element's background color
rootEl.children().children().css("background-color", "white");

// TODO: Starting from `rootEl`, what is the statement that will use "O" to block the "X" from winning
// HINT: Use the `.closest()`, or `.parent()` methods to go up the DOM tree
rootEl.children().eq(3).children().eq(0).text("O");
console.log(rootEl.closest(3).text());
// TODO: Starting from the bottom row, middle square or `.item-b3`, what is the statement that will win the game using "O"
// HINT: Use the ".closest()", or ".parent()" methods to go up the DOM tree
rootEl.find(".item-b3").parent.eq(1).children().eq(0).text("O");
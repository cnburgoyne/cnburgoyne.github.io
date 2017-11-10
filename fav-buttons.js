var filterButton = document.getElementById("filter");

filterButton.onclick = function() {

var items = document.getElementById("items");
items.removeChild(items.children[0]);


};

var highlightButton = document.getElementById("highlight");

highlightButton.onclick = function() {
var items = document.getElementById("items");
var child = items.children[0];
child.className += " highlight";

}

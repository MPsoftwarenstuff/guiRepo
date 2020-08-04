// ADD NEW ITEM TO END OF LIST
var node = document.createElement('LI');
var textnode = document.createTextNode("Cream");
node.appendChild(textnode);
var ul = document.getElementsByTagName('ul');
ul[0].appendChild(node);

// ADD NEW ITEM START OF LIST
node = document.createElement('LI');
textnode = document.createTextNode("Kale");
node.appendChild(textnode);
ul[0].insertBefore(node, ul[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var hot = document.getElementsByTagName('li');
var numItems = hot.length;

for (var i = 0; i < numItems; i++) {
  hot[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var h2 = document.getElementsByTagName('h2');
h2[0].textContent = 'buy Groceries (' + numItems + ')';


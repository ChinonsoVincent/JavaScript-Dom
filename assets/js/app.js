//Dom

// getElementById
const title1 = document.getElementById("main-heading");

//getElementsByClassName
const listItems = document.getElementsByClassName("list-items");

//getElementsByTagName
const list = document.getElementsByTagName("li");

//querySelector
const container = document.querySelector("div"); //selects only the first instance

//querySelectorAll
const div = document.querySelectorAll("div"); //selects all instances

// styling Elements
const title = document.querySelector("#main-heading");

title.style.color = "red"; //just like inlne styling

// const listItem = document.querySelectorAll(".list-items");

// for (i = 0; i < listItem.length; i++) {
// 	listItem[i].style.fontSize = "2rem";
// }

//Creating Elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

//Adding Elements
ul.append(li);

//Modifying Text
li.innerText = "X-Men";
// const firstListItem = document.querySelector(".list-items");

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// //setAttribute
// li.setAttribute("id", "main-heading");

// //Remove Attributes
// li.removeAttribute("id");

// //getAttribute
// const title3 = document.querySelector("#main-heading");

// console.log(title.getAttribute("id"));

//Modifying attribute and Classes
li.classList.add("list-items"); //add it to the class list of same class name
li.classList.remove("list-items"); //removes the class name

console.log(li.classList.contains("list-items")); //to check if an element contains an attribute

//Remove Element
li.remove();

//Traverse the DOM

//parent node traversal
const ulist = document.querySelector("ul");

console.log(ulist.parentNode); //getting the parent, Btter to use node instead of element
console.log(ulist.parentElement); //getting the parent
console.log(ulist.parentNode.parentNode); //getting the parent of the parent or grandparent if you will
console.log(ulist.parentElement.parentElement); //getting the parent of the parent

//child node traversal
console.log(ulist.childNodes);
console.log(ulist.firstChild);
console.log(ulist.lastChild);

// ulist.firstChild.style.backgroundColor = "blue"; //this wouldnt work because te first child is a text node

ulist.childNodes[1].style.backgroundColor = "blue"; //this would reflect

//children
console.log(ulist.children);
console.log(ulist.firstElementChild);
console.log(ulist.lastElementChild);

//Sibling node traversal
console.log(ulist.previousSibling); //it will five you a text node
console.log(ulist.nextSibling); // text node

//to show why it gives a text node
const div1 = document.querySelector("div");

console.log(div1.childNodes); // you would notice that the text node is before and after the ul
//use element siblings
console.log(ulist.previousElementSibling); // this is the way to escape that
console.log(ulist.nextElementSibling);

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

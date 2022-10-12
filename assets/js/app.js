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

const listItem = document.querySelectorAll(".list-items");

for (i = 0; i < listItem.length; i++) {
	listItem[i].style.fontSize = "2rem";
}

//Creating Elements

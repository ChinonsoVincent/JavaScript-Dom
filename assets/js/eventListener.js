//element.addEventListener("type of event", function, boolean)

//click event
const buttonTwo = document.querySelector(".btn-2");

function alertBtn2() {
	alert("I also love JavaScript");
}

buttonTwo.addEventListener("click", alertBtn2);

//Mouse Over event
const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
	newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

//another example

const button3 = document.querySelector(".btn-3");

function mouseBtn3() {
	alert("I too love JavaScript");
}

button3.addEventListener("mouseover", mouseBtn3);

//Reveal Event
const reveal = document.querySelector(".reveal-btn");
const hidden = document.querySelector(".hidden-content");

function revealHiddenContent() {
	if (hidden.classList.contains("reveal-btn")) {
		hidden.classList.remove("reveal-btn");
		reveal.innerText = "Reveal More";
	} else {
		hidden.classList.add("reveal-btn");
		reveal.innerText = "Reveal Less";
	}
}

reveal.addEventListener("click", revealHiddenContent);

//Event delegation
//Event delegation allows users to append a SINGLE event listener to a parent element that adds it to all of its present and future descendants that match a selector.

// document.querySelector("#football").addEventListener("click", function (e) {
// 	console.log("football is clicked");
// 	const target = e.target;

// 	if (target.matches("li")) {
// 		target.style.backgroundColor = "grey";
// 	}
// });
//This can be applied to all individual li to give the same result, but it could be done with ckeaner codes

document.querySelector("#sports").addEventListener("click", function (e) {
	console.log(e.target.getAttribute("id") + " is clicked");

	const target = e.target;

	if (target.matches("li")) {
		target.style.backgroundColor = "grey";
	}
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.setAttribute("id", "rugby");
newSport.innerText = "rugby";

sports.appendChild(newSport);

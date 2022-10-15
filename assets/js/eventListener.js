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

const hamburger = document.getElementById("ham");
const container = document.querySelector(".hideOrShow");

// console.log(container);
hamburger.addEventListener("click", (e) => {
	container.classList.toggle("hideOrShow")
});

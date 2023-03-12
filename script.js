const btns = document.querySelectorAll(".btn");

const contactContents = document.querySelector(".contact-contents");
const aboutContents = document.querySelector(".about-contents");

btns[0].addEventListener("click", () => {
  contactContents.style.display = "block";
  aboutContents.style.display = "none";
});

btns[1].addEventListener("click", () => {
  aboutContents.style.display = "block";
  contactContents.style.display = "none";
});

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const mobileNav = document.querySelector(".mobileNav");
const mobileLinks = document.querySelector(".mobileNav ul");

openBtn.addEventListener("click", () => {
  mobileNav.style.right = "0";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.right = "-100%";
});

mobileLinks.addEventListener("click", () => {
  mobileNav.style.right = "-100%";
});

const sideBar = document.querySelector(".sideBar");
const burgerIcon = document.querySelector("#burgerIcon");
const closeBtn = document.querySelector(".sideBar>img");
burgerIcon.addEventListener("click", () => {
  sideBar.style.right = "0px";
});
closeBtn.addEventListener("click", () => {
  sideBar.style.right = "-300px";
});

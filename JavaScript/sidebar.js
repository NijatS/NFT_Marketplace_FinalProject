const sideBar = document.querySelector(".sideBar");
const burgerIcon = document.querySelector("#burgerIcon");
const closeBtn = document.querySelector(".sideBar>img");
const toastDiv = document.querySelector(".toastDiv");
const emailBtns = document.querySelectorAll(".EmailBtn");
burgerIcon.addEventListener("click", () => {
  sideBar.style.right = "0px";
});
closeBtn.addEventListener("click", () => {
  sideBar.style.right = "-300px";
});

emailBtns.forEach((button) => {
  const input = button.parentElement.querySelector("input");
  button.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "toast";
    if (!emailCheck(input.value)) {
      div.innerHTML = `
      <i class="material-icons" style="color: red">error</i>
      <p class="text">Muallim email format duz deyil</p>
      <img src="../Images/svg/close.svg" alt="" />`;
    } else {
      div.innerHTML = `
      <i class="fa fa-check-circle" style="color: green"></i>
      <p class="text">Bacardizzz aferinn mualllim</p>`;
    }
    toastDiv.append(div);
    input.value = "";
  });
});
function clearToast() {
  if (toastDiv.children.length > 0) toastDiv.children[0].remove();
}
setInterval(clearToast, 1500);

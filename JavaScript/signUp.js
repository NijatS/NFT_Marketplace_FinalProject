const inputs = document.querySelectorAll("#create input");
const inputp = document.querySelectorAll(".inputs p");
const createBtn = document.querySelector("#createBtn");

if (!inputCheck()) {
  createBtn.disabled = true;
}
console.log(inputp);
inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    inputPCleaner();
    console.log(inputs[3].value);
    if (inputCheck()) {
      createBtn.disabled = false;
    } else {
      createBtn.disabled = true;
    }
    if (!emailCheck(inputs[1].value)) {
      inputp[1].textContent = "Email must be @";
    }
    if (passwordCheck(inputs[2].value) == "length") {
      inputp[2].textContent = "Password must be more than 8";
    } else if (passwordCheck(inputs[2].value) == "space") {
      inputp[2].textContent = "Password mustn`t contain space";
    } else if (passwordCheck(inputs[2].value) == "upper") {
      inputp[2].textContent = "A minimum of 1 upper case";
    } else if (passwordCheck(inputs[2].value) == "lower") {
      inputp[2].textContent = "A minimum of 1 lower case";
    } else if (passwordCheck(inputs[2].value) == "number") {
      inputp[2].textContent = "A minimum of 1 number case";
    }
    if (inputs[3].value != inputs[2].value) {
      inputp[3].textContent = "Password must be same";
    }
  });
});

createBtn.addEventListener("click", () => {
  let count = 0;
  inputp.forEach((input) => {
    if (input.textContent == "") {
      count++;
    }
  });
  if (count == 4) {
    display(
      "Ooooo...",
      "Mualllim bacardin:) 100 balda yazarsiz yeqin!",
      "success"
    );
    return;
  }
  display("Aaaa!", "Mualllim melumatlari duz gir basna donum!", "error");
});

function display(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
}
function inputCheck() {
  return Array.from(inputs).every((input) => input.value.trim() != "");
}
function emailCheck(data) {
  const reg = new RegExp(
    "^([a-z0-9]+[-._])*([a-z0-9])+@+([a-z]+[.])*([a-z]){2,8}$"
  );
  if (reg.test(data)) return true;
  return false;
}
function inputPCleaner() {
  inputp.forEach((p) => {
    p.textContent = "";
  });
}
function passwordCheck(data) {
  const reg1 = new RegExp("[A-Z]");
  const reg2 = new RegExp("[a-z]");
  const reg3 = new RegExp("[0-9]");
  if (String(data).length < 8) return "length";
  if (String(data).includes(" ")) return "space";
  if (!reg1.test(data)) return "upper";
  if (!reg2.test(data)) return "lower";
  if (!reg3.test(data)) return "number";
  return "success";
}

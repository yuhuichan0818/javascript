const input = document.querySelector("#input");
const letters = document.querySelector("#letters");
const pw = document.querySelector("#pw");
const pw_show = document.querySelector("#pw_show");

const id = document.querySelector("#id");
const checkbox = document.querySelector("#checkbox");
const id_accept = document.querySelector("#id_accept");
const pw_accept = document.querySelector("#pw_accept");
const check_accept = document.querySelector("#check_accept");
const login = document.querySelector("#login");

input.addEventListener("input", (e) => {
  let count = 0;
  count = e.target.value.length;
  letters.textContent = `${count} / 100`;

  if (count > 100) {
    window.alert("100글자 이상이에요");
    letters.textContent = "0 / 100";
    return (e.target.value = "");
  }
});

pw_show.addEventListener("click", () => {
  pw.type = pw.type == "password" ? "text" : "password";
});

let checkID = false;
let checkPW = false;
let checkCheck = false;

id.addEventListener("input", (e) => {
  checkID = e.target.value.includes("@") ? true : false;
});

pw.addEventListener("input", (e) => {
  checkPW = e.target.value.length < 8 ? false : true;
});

checkbox.addEventListener("input", (e) => {
  checkCheck = e.target.checked ? true : false;
});

login.addEventListener("click", () => {
  id_accept.classList.add("show");
  if (checkID) {
    return id_accept.classList.toggle("show");
  }

  pw_accept.classList.add("show");
  if (checkPW) {
    return pw_accept.classList.toggle("show");
  }

  check_accept.classList.add("show");
  if (checkCheck) {
    return check_accept.classList.toggle("show");
  }
});

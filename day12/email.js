const email = document.querySelector("#email");
const email_warn = document.querySelector("#email_warn");
const password = document.querySelector("#password");
const password_warn = document.querySelector("#password_warn");
const check = document.querySelector("#check");
const check_warn = document.querySelector("#check_warn");
const login = document.querySelector("#login");

login.addEventListener("click", () => {
  const hasAt = email.value.includes("@");
  hasAt && email_warn.classList.add("noShow");
  !hasAt && email_warn.classList.remove("noShow");

  const isLength8over = password.value.length >= 8;
  isLength8over && password_warn.classList.add("noShow");
  !isLength8over && password_warn.classList.remove("noShow");

  const isChecked = check.checked;
  isChecked && check_warn.classList.add("noShow");
  !isChecked && check_warn.classList.remove("noShow");
});

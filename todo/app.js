import { render, txtRender } from "./render.js";

const add = document.querySelector("#add");
const form = document.querySelector("#form");

txtRender(form);

form.addEventListener("input", (e) => {
  add.disabled = e.target.value === "";
});

form.addEventListener("submit", (e) => {
  add.disabled = true;
});

render(form);

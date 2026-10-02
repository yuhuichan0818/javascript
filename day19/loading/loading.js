const photo = document.querySelector("#photo");
const loader = document.querySelector(".loader");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

const load = (x) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success((photo.src = x));
    }, 2000);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = `${input.value.trim()}.jpeg`;

  load(name).then(() => {
    loader.remove();
  });
});

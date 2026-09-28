const box = document.querySelector(".box");

box.addEventListener("mouseover", (e) => {
  console.log({ e });
  console.log(e.target);
  console.log(e.target.className);
});

const input = document.querySelector("#input");

input.addEventListener("input", (e) => {
  console.log({ e });
  console.log(e.target);
  console.log(e.target.value);
});

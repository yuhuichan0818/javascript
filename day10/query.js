const box = document.querySelector(".box");
console.log(box);
// box.style.backgroundColor = "skyblue"

const boxes = document.querySelectorAll(".box");
console.log(boxes); // array 비슷한거 나옴

boxes.forEach((x) => {
  x.innerHTML = "blue";
});

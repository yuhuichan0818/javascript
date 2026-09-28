// const counts = +prompt("몇개 만들까요?");

// Array(counts)
//   .fill(undefined)
//   .forEach(() => {
//     const btn = document.createElement("button");
//     btn.innerHTML = "안녕!";
//     document.body.append(btn);
//   });

// div 개수 받고, hello 나와야되고
// backgroundCoolor: red, orange, yellow, green, blue, navy, indigo

const counts = +prompt("몇개 만들까요?");
const color = ["red", "orange", "yellow", "green", "blue", "navy", "indigo"];

Array(counts)
  .fill(undefined)
  .forEach((v, i) => {
    const a = document.createElement("div");
    a.innerHTML = "hello";
    a.style.backgroundColor = color[i % 7];
    document.body.append(a);
  });

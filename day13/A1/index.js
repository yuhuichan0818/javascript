import { buttons } from "./data.js";
import { init } from "./init.js";

const buttonList = document.querySelector(".buttonList");

buttons.forEach((v) => {
  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerHTML = v.title;
  btn.id = v.id;

  /* 이벤트 넣기 [모든 버튼 activiated 빼고, 해당 버튼한테만 주기] */
  btn.addEventListener("click", (e) => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((v) => v.classList.remove("activated"));
    e.target.classList.add("activated");
  });

  buttonList.append(btn);
});

// init();
const review = document.querySelector("#review");
review.classList.add("activated");

const contents_tag = document.querySelector(".contents");
contents_tag.innerHTML = `<p>${buttons[0].contents}</p>`;

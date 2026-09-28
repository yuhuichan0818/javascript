import { classReset } from "./FUNC.JS";

const container = document.querySelector("#container");

const info = document.querySelector("#info");
const review = document.querySelector("#review");
const qna = document.querySelector("#qna");

const info_content = document.querySelector("#info_content");
const review_content = document.querySelector("#review_content");
const qna_content = document.querySelector("#qna_content");

container.addEventListener("click", (e) => {
  if (e.target.id == "info") {
    classReset();
    review_content.classList.add("noShow");
    qna_content.classList.add("noShow");
  }

  if (e.target.id == "review") {
    classReset();
    info_content.classList.add("noShow");
    qna_content.classList.add("noShow");
  }

  if (e.target.id == "qna") {
    classReset();
    info_content.classList.add("noShow");
    review_content.classList.add("noShow");
  }
});

// 공교롭게 다녀감 - 찬식

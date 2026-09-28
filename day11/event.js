const btn = document.querySelector(".btn");
btn.addEventListener("mouseover", () => {
  console.log("can i?");
});

const jeom = document.querySelector(".jeom");
jeom.addEventListener("click", () => {
  alert("오늘 점심 돈치킨이래");
});

const back_btn = document.querySelector(".back_btn");
back_btn.addEventListener("click", () => {
  const a = document.createElement("div");
  a.classList.add("back");
  a.innerHTML = "NO";
  document.body.append(a);
});

const heart = document.querySelector(".heart");
heart.addEventListener("click", () => {
  heart.innerHTML = heart.innerHTML == "🤍" ? "❤️" : "🤍";
});

let counts = 0;

const cal = document.querySelector(".cal");
const cal_counts = document.querySelector(".counts");

const minus = document.querySelector(".minus");
minus.addEventListener("click", (v) => {
  v = counts;
  v -= 1;
  cal_counts.innerHTML = v;
  return (counts = v);
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", (v) => {
  v = counts;
  v += 1;
  cal_counts.innerHTML = v;
  return (counts = v);
});

document.body.append(cal);

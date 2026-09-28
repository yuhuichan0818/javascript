const form = document.querySelector("#f");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  if (!name) return;

  const li = document.createElement("li");
  const co = document.createElement("span");
  const re = document.createElement("button");

  co.textContent = name; // 사용자 입력 → textContent
  re.textContent = `삭제`;
  re.classList.add("remove");
  li.append(co);
  li.append(re);
  list.append(li);

  console.log(list.length);
  form.reset();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.closest("li").remove();
  }
});

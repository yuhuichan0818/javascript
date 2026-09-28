// 할 내용, 완료 여부, 데드라인

class todo {
  #content;
  #completed;
  #deadline;

  constructor(content, deadline) {
    this.#content = content; // all type (no html)
    this.#completed = false; // checkbox value - checked return
    this.#deadline = deadline; //
  }

  setContent(content) {
    this.#content = content;
  }

  setCompleted() {
    this.#completed = !this.#completed;
  }
}

// checkbox click => setCompleted 함수 실행 value값 불러오고 css 변경

const add = document.querySelector(".add");
const add__add = document.querySelector(".add__add");
const list = document.querySelector("#list");

add.addEventListener("submit", (e) => {
  e.preventDefault();

  const add__content = document.querySelector(".add__content").value.trim();
  const add__deadline = document.querySelector(".add__deadline").value;

  const newTodo = new todo(add__content, add__deadline);
  const li = document.createElement("li");
  li.classList.add("list");

  li.insertAdjacentHTML(
    "afterbegin",
    `<input class="list__checkbox" type="checkbox" />
        <span class="list__content">${add__content}</span>
        <span class="list__deadline">${add__deadline}</span>`,
  );

  list.append(li);
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("list__checkbox")) {
    const newList = e.target.closest("li");
    //   newList.setCompleted();
    console.log(newList);
  }
});

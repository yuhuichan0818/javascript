import { component } from "./component.js";
import { barRender, save, todayRender, generateTodo } from "./func.js";

const list = document.querySelector("#list");
const clear = document.querySelector("#clear");
const txt = document.querySelector("#txt");
const foot = document.querySelector(".foot");
const barText = document.querySelector("#progress-text");
const bar = document.querySelector("#progress-bar");
const today = document.querySelector("#today");
const filters = document.querySelector("#filters");

let todos = JSON.parse(localStorage.getItem("todos")) ?? [];
let currentFilter = "all";

// 텍스트 관련 모두 렌더
export const txtRender = () => {
  list.innerHTML = "";
  todayRender(today);
  barRender(bar, barText, todos);
  clear.disabled = !todos.length;
  const currentStatus = {
    all: todos,
    active: todos.filter((v) => !v.isDone),
    done: todos.filter((v) => v.isDone),
  };
  const filteredTodos = currentStatus[currentFilter];
  if (filteredTodos.length == 0) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    empty.insertAdjacentHTML("afterbegin", component.empty());
    list.append(empty);
  }

  filteredTodos.forEach((t) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.dataset.id = t.id;
    li.dataset.isDone = t.isDone;
    li.insertAdjacentHTML("afterbegin", component.item(t));
    t.isDone && li.classList.add("done");
    list.append(li);
  });
};

// 사용자 입력 값 받고, 모두 렌더
export const render = (x) => {
  x.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = txt.value.trim();
    if (!userInput) return;
    todos.push(generateTodo(userInput));
    save(todos);

    // 끝낸 일 버튼 눌려있으면, 추가될 때 모르니까 버튼이랑 리스트 전체로 바꿔주기
    if (currentFilter === "done") {
      currentFilter = "all";
      filters.querySelectorAll("button").forEach((btn) => {
        btn.setAttribute(
          "aria-pressed",
          btn.dataset.filter === "all" ? "true" : "false",
        );
      });
    }
    txtRender();
    txt.value = "";
    x.reset();
  });
};

// 버튼에 따라 다른 리스트 출력
filters.addEventListener("click", (e) => {
  const button = e.target.closest("button");

  if (!button) return;
  currentFilter = button.dataset.filter;
  filters.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn === button ? "true" : "false");
  });
  txtRender();
});

// 리스트
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  const id = Number(li.dataset.id);
  // 리스트 삭제
  if (e.target.classList.contains("item__del")) {
    todos = todos.filter((todo) => todo.id !== id);

    save(todos);
    txtRender();
  }
  // 끝낸 일로 변경
  if (e.target.classList.contains("item__check")) {
    const todo = todos.find((todo) => todo.id === id);
    todo.isDone = !todo.isDone;

    save(todos);
    txtRender();
  }
});

// 끝낸 일 모두 지우기
foot.addEventListener("click", (e) => {
  if (e.target.classList.contains("foot__clear")) {
    const todo = todos.filter((todo) => todo.isDone === false);
    todos = todo;

    save(todos);
    txtRender();
  }
});

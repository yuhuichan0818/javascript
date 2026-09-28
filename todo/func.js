// 로컬스토리지 세이브
export const save = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// 할 일 progress 렌더
export const barRender = (bar, barText, todos) => {
  const total = todos.length;
  const done = todos.filter((todo) => todo.isDone).length;
  const progress = todos.length ? (done / total) * 100 : 0;
  barText.textContent = `${total}개 중 ${done}개 끝`;
  bar.style.width = `${progress}%`;
};

export const todayRender = (today) => {
  const now = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = days[now.getDay()];

  today.textContent = `${now.getMonth() + 1}월 ${now.getDate()}일 ${dayOfWeek}요일`;
};

export const generateTodo = (v) => ({
  id: Date.now(),
  text: v,
  isDone: false,
});

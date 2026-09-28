const container = document.querySelector(".container");

container.insertAdjacentHTML(
  "afterbegin",
  `
      <div class="header">
        <span class="title">슈니버시티</span>
        <button class="dark">🌙 어둡게</button>
      </div>
      <button class="alert">알림 받기</button>
      <button class="auto-login">자동 로그인</button>
    `,
);

const dark = document.querySelector(".dark");
dark.addEventListener("click", () => {
  dark.innerHTML = dark.innerHTML == "🌙 어둡게" ? "☀️ 밝게" : "🌙 어둡게";
  dark.classList.toggle("dark_mode");
  container.classList.toggle("dark_mode");
});

document.body.append(container);

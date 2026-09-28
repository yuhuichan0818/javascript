export const component = {
  empty:
    () => `<p class="empty__title" id="empty-title">아직 끝낸 일이 없어요</p>
        <p class="empty__sub" id="empty-sub">체크한 일이 여기로 모여요</p>
      `,
  item: (t) => `
      <label class="item__label">
        <input class="item__check" type="checkbox" ${t.isDone ? "checked" : ""}>
        <span class="item__text">${t.text}</span>
    </label>
    <button class="item__del" type="button" aria-label="할 일 글자 삭제">✕</button>
    `,
};

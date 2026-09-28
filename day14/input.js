const calendar = document.querySelector("#calendar");
const dateText = document.querySelector("#dateText");

calendar.addEventListener("change", (e) => {
  const { value } = e.target;
  const [year, month, date] = value.split("-");

  console.log(e.target.value);
  console.log(value);
  dateText.textContent = `${year}년${month}월${date}일입니다`;
  document.body.append(dateText);
});

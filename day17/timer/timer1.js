const hello = document.querySelector("#hello");
const time = document.querySelector("#time");

hello.addEventListener("click", () => {
  setTimeout(() => {
    window.alert("하이!");
  }, 3000);
});

time.addEventListener("click", () => {
  setTimeout(() => {
    let a = new Date();
    console.log(
      `${a.getHours()}시 ${a.getMinutes()}분 ${a.getSeconds()}초 입니다`,
    );
  }, 5000);
});

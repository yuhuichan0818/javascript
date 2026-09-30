const clock = document.querySelector("#clock");

// setTimeout(() => {}, 3000) : ~초 후에 해라
setInterval(() => {
  let a = new Date();
  clock.textContent = `${a.getHours()}시 ${a.getMinutes()}분 ${a.getSeconds()}초 입니다`;
}, 1000); // 반복

// a.toLocaleTimeString() : locale time 호출

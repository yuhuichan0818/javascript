// 브라우저에서 오래 걸리는 작업[async]: settimeout, setinterval

// promise: 비동기의 작업을 성공 또는 실패를 알려주는 타입
// 성공, 실패 매개변수 함수 넣기

const a = new Promise((success, fail) => {
  setTimeout(() => {
    success("피자");
  }, 1000);
});

console.log(a);
//state: success - fulfilled / fail - rejected / load - pending
//result: value

a.then((x) => console.log(x));
//then은 success일 시 실행

a.catch((x) => console.log(x));
//catch는 fail일 시 실행

// const b = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("토마토");
//   }, 2000);
// });

// b.then((x) => alert(`${x} 꿀맛}`));

const cs = document.querySelector("#case");
const input = document.querySelector("#input");
const ok = document.querySelector("#ok");

cs.addEventListener("submit", (e) => {
  e.preventDefault();

  const test = new Promise((success, fail) => {
    setTimeout(() => {
      success(input.value);
    }, 3000);
  });
  test.then((x) => alert(`${x} 꿀맛!`));
});

const c = (x) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(x);
    }, 2000);
  });
};

c("치킨").then((x) => alert(`${x} 꿀맛}`));

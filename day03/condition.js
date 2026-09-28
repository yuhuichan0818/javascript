// const num = +window.prompt("숫자 입력");

// if (num > 0) {
//   console.log(`${num}은 0보다 큽니다.`);
// }

// console.log("프로그램 종료");

const num = +window.prompt("정수 입력");
if (num > 0) {
  console.log("양의 정수");
} else if (num == 0) {
  console.log("0이에용");
} else {
  console.log("음의 정수");
}
console.log("프로그램 종료");

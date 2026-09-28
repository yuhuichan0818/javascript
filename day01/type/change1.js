const a = Number(window.prompt("첫 번째 숫자?"));
const b = Number(window.prompt("두 번째 숫자?"));

console.log(`두 숫자의 합은 ${a + b}입니다.`);

const c = Number(-11.23);
const d = Number(-4.12);
const math_t = Math.trunc(c);
const math_f = Math.floor(c);

console.log(math_t);
console.log(math_f);

const age = Number(window.prompt("몇 살이신가요?"));
console.log(`${2027 - age}년생 이군요!`);

// 일본 여행 경비 원화 입력: 엔화로 얼마 나오는지 콘솔로 출력
const won = Number(window.prompt("일본에 얼마 가져가세요?"));
console.log(`${Math.trunc(won / 8.6)}엔이에용`);

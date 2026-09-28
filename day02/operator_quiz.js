// const age = Number(window.prompt("나이 몇살이에요?"));
// const a = age >= 20 ? "성인" : "미성년자";

// console.log(`${a}입니다`);

// const integarOne = Number(window.prompt("-10부터 10까지 정수 하나 골라주세요"));
// const b = integarOne < 0 ? "음의 정수" : integarOne == 0 ? "0" : "양의 정수";

// console.log(`${b}입니다`);

// const interagrTwo = Number(window.prompt("숫자 하나만 더"));
// const c = interagrTwo % 2 == 1 ? "홀수" : "짝수";

// console.log(`${c}입니다`);

const age = Number(window.prompt("나이 몇살?"));
const bus = Number(window.prompt("버스 얼마?"));
const bus_cost =
  age <= 7 ? 0 : age <= 19 ? bus * 0.7 : age < 65 ? bus : bus * 0.7;

console.log(`${bus_cost}원 내세요`);

const int = Number(window.prompt("10000~99999중 하나 정해보세요"));
const a = int < 10000 || int > 99999;
const b =
  Math.floor(int / 10000) +
  Math.floor((int % 10000) / 1000) +
  Math.floor((int % 1000) / 100) +
  Math.floor((int % 100) / 10) +
  (int % 10);

console.log(a != true ? `각 자리 숫자의 합은${b}입니다` : "다시 입력해주세요");

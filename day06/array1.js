// map: 바꾸기 [return:  새 배열]
// filter: 거르기 [return: 새 배열]

// includes: value 값이 있나 [return: boolean]
// indexOf: value 값의 위치, 하나만 반환 [return: number]

// find: 찾기 [return: 조건을 만족한 "첫번째" 요소, undefinded]
const arr = [10, 20, 30, 40, 50];
const a1 = arr.find((x) => x <= 10); // 10
const a2 = arr.findIndex((x) => x <= 10); // 0번째

// every: 전부 참인가 [return: boolean]
// some: 하나라도 참인가 [return: boolean]
const a3 = arr.every((x) => x > 20); // false
const a4 = arr.some((x) => x > 20); // true

// reduce: 누적시키기 [return: 누적값] // a: accumulator (합산), c: current (지금 어디여)
const a5 = arr.reduce((a, c) => {
  console.log({ a: a, c: c });
  return a + c;
});

const coupang = [
  { name: "선풍기", price: 55000, count: 1 },
  { name: "양말", price: 3500, count: 2 },
  { name: "칫솔", price: 4000, count: 3 },
];

const c1 = coupang.map((x) => x.price * x.count).reduce((a, c) => a + c);
// const c2 = coupang.reduce((a, c) => a.price + c.price, 0);

console.log(c1);
// console.log(c2);

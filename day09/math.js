// Math.PI, abs 절대값, floor 내림, ceil 올림, random 0~1 실수

const a = Array(100)
  .fill(undefined)
  .map((x) => (x = Math.random()));

console.log(a);

// Int[정수] 랜덤 함수
const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(237, 1));

const b = Array(100)
  .fill(undefined)
  .map((x) => (x = randomInt(100, 1)));
console.log(b);

// hex code 뽑기
const hex = [..."0123456789abcdef"];

const pallete = Array(10)
  .fill(undefined)
  .map((x) => {
    let y = Array(6)
      .fill(undefined)
      .map((x) => (x = hex[randomInt(15, 0)]));
    x = y.reduce((a, c) => a + c);
    return `#${x}`;
  });

console.log(pallete);

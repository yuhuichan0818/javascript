const square = window.prompt("정사각형의 한 변의 길이는 몇인가요?");

const a = square * square;
const b = square * 4;

console.log(`정사각형의 넓이: ${a}, 둘레:${b}입니다.`);

const circle = window.prompt("원의 반지름은 몇인가요?");

const c = Math.floor(circle * circle * Math.PI);
const d = Math.floor(circle * Math.PI * 2);

console.log(`원의 넓이: ${c}, 둘레:${d}입니다.`);

const triangle = window.prompt("정삼각형의 변의 길이는 몇인가요?");

const e = Math.floor((Math.sqrt(3) * triangle * triangle) / 4);
const f = triangle * 3;

console.log(`정삼각형의 넓이: ${e}, 둘레:${f}입니다.`);

const minute = window.prompt("지금 몇분이에요?");

const g = minute * 60;

console.log(`초로 변환하면 ${g}초입니다.`);

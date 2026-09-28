// function: 마술상자 (입력 -> 출력)

function name(a) {
  return a + "오이시";
}

const b = name(아메리카노);
console.log(b);

function makeCoffee(beans) {
  return beans + "산 아메리카노";
}

function addTen(x) {
  return x + 10;
}

const c = addTen(100);

console.log(c);

// 학생이름 받으면 오브젝트로 name:이름 돌려주기
function objectName(studentName) {
  return { name: studentName };
}

const d = objectName("희찬");

console.log(d);

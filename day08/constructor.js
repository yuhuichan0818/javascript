// 타입캐스팅 & 생성자함수
// Basic
const a = String(10); // "10"
const b = Boolean(1); // true
const c = Number("100"); // 100
const d = Object(); // 구 문법 => {}

// 가끔 쓰는 거. 빈 배열 생성
const e = Array(100); // 빈 배열 100개

// 배열은 값이 비어있으면 map이 안먹힘. 따라서 fill로 value값 넣기
const arrayFill = e.fill(0).map((v, i) => i + 1); // [1~100]

// Object 타입은 키와 밸류값의 이름이 같으면 a:a -> a와 같이 생략해도 됨
console.log({ a, b, c, d, arrayFill });

arrayFill.forEach(); // 훑기, 스키밍

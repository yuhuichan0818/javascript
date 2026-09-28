/* 
input & output
variable
datatype
- string, number, boolean

operator
- 대입, 산수, 비교, 논리, 삼항

truthy & falsy
- false: 0, ""
- true: 위 빼고 전부

type casting
- 명시적 타입캐스팅: String(), Number(), Boolean()
- 암묵적 타입캐스팅: string: "", number: +, boolean: !
*/
const test1 = !!1;
const test2 = +"100";
const test3 = "로제" + "떡볶이"; // 로제떡볶이 - 문자 연결 연산자
const test4 = +"1" + +"2"; // 3 - 숫자화 + 문자 연결

console.log(`${test1}`);

// ""로 변수 자체가 스트링 취급을 받음. 취급 받는 곳부터 계산 x 문자 연결
const test6 = "1" + 2 + 3 + 4; // 1234
const test7 = 1 + "2" + 3 + 4; // 1234
const test8 = 1 + 2 + "3" + 4; // 334
const test9 = 1 + 2 + 3 + "4"; // 64

console.log(`${test6}`);
console.log(`${test7}`);
console.log(`${test8}`);
console.log(`${test9}`);

// ||[or] -> True 찾으면 해당 값 반환
// &&[and] -> False 찾으면 해당 값 반환
const username = window.prompt("유저 이름 입력");
// 입력하면 username, 아니면 ""이니까 falsy -> Guest
const nickname = username || "Guest";
console.log(nickname);

const password = +window.prompt("비밀번호 입력");
const isLoggined = password == 1234 && true;

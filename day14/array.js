const a = Array.from("abcdefg"); // 구문법
const b = [..."abcdefg"]; // 신문법
console.log(a, b);

const c = document.querySelectorAll("li"); // NodeList
const d = [...document.querySelectorAll("li")]; // Array
console.log(c, d);

const arr = [1, 3, 5, 7, 9, 11];

const a1 = arr.filter((x) => x > 6);
console.log(a1);

const a2 = arr.filter((x) => x >= 3 && x <= 10);
console.log(a2);

const a3 = arr.filter((x) => x % 3 == 0);
console.log(a3);

const a4 = arr.filter((x, i) => i < 3);
console.log(a4);

const fruits = ["apple", "banana", "kiwi", "pineapple", "melon", "mango"];

const f1 = fruits.filter((x) => x.length >= 6);
const f2 = fruits.filter((x) => x.includes("e")).map((x) => x.toUpperCase());

console.log(f1);
console.log(f2);

const students = [
  { name: "윤정은", age: 30, mbti: "ENFP" },
  { name: "오찬식", age: 29, mbti: "ESTJ" },
  { name: "이민욱", age: 26, mbti: "ISFJ" },
  { name: "오재희", age: 27, mbti: "ISTP" },
];

const s1 = students
  .filter((x) => x.age >= 29)
  .map((x) => {
    x.birthyear = 2027 - x.age;
    return x;
  });
const s2 = students
  .filter((x) => x.mbti[0] == "I")
  .map((x) => {
    x.tendency = "내향적";
    return x;
  });

console.log(s1);
console.log(s2);

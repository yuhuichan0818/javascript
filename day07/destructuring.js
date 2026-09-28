// const fruits = ["apple", "banana", "kiwi", "melon"];
// const [one, two] = fruits;

const students = [
  "오찬식",
  "29",
  () => {
    console.log("돌아왔구나");
  },
  true,
  "JLPT 없음",
];

const [one, two, three] = students;

console.log(three);
console.log(three());

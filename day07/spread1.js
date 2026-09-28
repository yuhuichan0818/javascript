// Array, Object는 분리 안됨. 문자열만 쪼개짐
const test = [..."snack"];

console.log(test);

const fruits = [
  "apple",
  "pineapple",
  "banana",
  "peach",
  "kiwi",
  "orange",
  "mango",
  "strawberry",
];

const spreadFruits = fruits.map((x) => {
  let y = [];
  y = [...x];
  y = y.map((a) => ("aeiou".includes(a) ? "😊" : a));
  x = y.reduce((a, c) => a + c);
  return x;
});

console.log(spreadFruits);

const spreadTwo = fruits.map((word) =>
  [...word]
    .map((spelling) =>
      [..."aeiou"].some((vowel) => vowel == spelling) ? "😊" : spelling,
    )
    .reduce((a, c) => a + c),
);

console.log(spreadTwo);

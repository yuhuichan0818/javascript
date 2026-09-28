const movie = { name: "오디세이", director: "놀란", runningTime: 180 };
const snack = { popcorn: "고소", drink: "제로콜라", side: "나초" };

const a = { ...movie, ...snack };
console.log(a);

const coffee = [
  { name: "아메리카노", price: 3000, shots: 2 },
  { name: "라떼", price: 3500, shots: 2 },
  { name: "연유라떼", price: 4000, shots: 2 },
];

// const c1 = coffee.map((x) => {
//   ({ ...x, price: x.price + 1000, shots: x.shots * 2 });
// });

const c2 = coffee.map((x) => ({
  ...x,
  name: x.name + "야호",
  price: x.price * 2,
}));

console.log(c2);

const std = [
  { name: "오찬식", age: 29 },
  { name: "윤정은", age: 29 },
  { name: "이민욱", age: 27 },
];

const newStd = std.map((x) => ({ ...x, favorite: "ice" }));

console.log(newStd);

const fruits1 = ["apple", "banana", "kiwi"];
const fruits2 = ["melon", "watermelon", "lemon", "kiwi"];
const newFruits = [...fruits1, ...fruits2];

console.log(newFruits);

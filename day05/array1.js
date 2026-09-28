const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addTen = (x) => {
  return x + 10;
};

const newArr = arr.map(addTen);
console.log(newArr);

// const oddEven = (num) => {
//   return num % 2 === 0 ? num * 3 : num * 2;
// };

const a = arr.map((num) => (num % 2 === 0 ? num * 3 : num * 2));
console.log(a);

const b = arr.map((num) => num * num);
console.log(b);

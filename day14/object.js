const menu = {
  name: "americano",
  price: 3000,
  kcal: 5,
  shots: 2,
};

const a = Object();
const b = Object.keys(menu);
const c = Object.values(menu);
const d = Object.entries(menu);

console.log(b, c, d);

// const array = Object.entries(menu).map((x,y) => {})

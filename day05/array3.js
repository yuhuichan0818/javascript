const banapresso = [
  { name: "아메리카노", price: 2000, shots: 2, kcal: 1 },
  { name: "크림라떼", price: 3500, shots: 2, kcal: 200 },
  { name: "소금빵", price: 2000, kcal: 250 },
  { name: "피스타치오라떼", price: 4000, kcal: 300 },
];

// 가격 10% 할인
// 라떼 20% 인상
// 빵 가격 절반, 칼로리 100 추가
// 신메뉴 "초코라떼" 가격 5000 샷 2 칼로리 200

// function a() {
//   for (let i = 0; i < banapresso.length; i++) {
//     return banapresso[i].price = banapresso[i].price * 0.9;
//   }
// }

console.log(b);

const change = (x) => {
  x.price = x.price * 0.9;
  return x;
};
const bana1 = banapresso.map(change);

// const a = banapresso.map((x) => x.price);

// const bana1 = banapresso.map(
//   banapresso.replace(banapresso.price, banapresso.price * 0.9),
// );

console.log(bana1);

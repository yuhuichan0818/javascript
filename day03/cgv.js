const selectSeat = window.prompt("좌석 골라주세요 (일반/라이트/프리미엄)");
// const selectPopcorn = window.prompt("팝콘 골라주세요 (일반/캬라멜/치즈)");
// const selectBeverage = window.prompt("음료 골라주세요 (탄산/아이스티/커피)");
// const selectMembership = window.prompt("멤버쉽 있으세요 (브론즈/실버/골드)");

const cgv = {
  seat: { 일반: 15000, 라이트: 13000, 프리미엄: 18000 },
  popcorn: { 일반: 8000, 캬라멜: 9000, 치즈: 9000 },
  beverage: { 탄산: 3000, 아이스티: 2000, 커피: 4500 },
  membership: { 브론즈: 1, 실버: 0.9, 골드: 0.8 },
};

const cgvSeat = [
  { name: "일반", price: 15000 },
  { name: "라이트", price: 13000 },
  { name: "프리미엄", price: 18000 },
];

const cgvPopcorn = [
  { name: "일반", price: 8000 },
  { name: "캬라멜", price: 9000 },
  { name: "치즈", price: 9000 },
];

const cgvBeverage = [
  { name: "탄산", price: 3000 },
  { name: "아이스티", price: 2000 },
  { name: "커피", price: 4500 },
];

const cgvMembership = [
  { name: "브론즈", rate: 1 },
  { name: "실버", rate: 0.9 },
  { name: "골드", rate: 0.8 },
];

const cgvSeatPrice = cgvSeat.find(
  (cgvSeat) => cgvSeat.name === selectSeat,
).price;

console.log(`총 금액은 ${cgvSeatPrice}입니다.`);
console.log(cgv.seat[selectSeat]);

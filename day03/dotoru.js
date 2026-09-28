const menu = [
  { name: "blend", price: 280, size: ["s", "m", "l"] },
  { name: "ice", price: 380, size: ["s", "m", "l"] },
  { name: "sand", price: 600, size: ["s", "m", "l"] },
];

const orderIndex = +window.prompt("도토루 메뉴 123 중에?");
const orderSize = window.prompt("사이즈는 s,m,l 중에?");
const orderMember = window.prompt("멤버쉽 있으세요? (yes / no)");

const memberDiscountRate = orderMember == "yes" ? 0.9 : 1;
const sizeRate = orderSize == "s" ? 1 : orderSize == "m" ? 1.1 : 1.2;
const rePrice = menu[orderIndex - 1].price * memberDiscountRate * sizeRate;

// if (orderMember == "yes") {
//   if (orderSize == "m") {
//     rePrice = rePrice * 0.99;
//   } else if (orderSize == "l") {
//     rePrice = rePrice * 1.08;
//   } else {
//     rePrice = rePrice * 0.9;
//   }
// } else {
//   if (orderSize == "m") {
//     rePrice = rePrice * 1.1;
//   } else if (orderSize == "l") {
//     rePrice = rePrice * 1.2;
//   } else {
//     rePrice = rePrice;
//   }
// }

console.log;

console.log(
  `주문하신 ${menu[orderIndex - 1].name}메뉴 가격은 ${menu[orderIndex - 1].price}원 입니다. 3할인된 가격은 ${rePrice}원 입니다.`,
);

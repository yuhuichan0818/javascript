/* 
- 비동기 컨트롤
카페 주문 순서: 주문 > 결제 > 제조 > 수령
*/

const orderCoffee = (menu, step) => {
  setTimeout(() => {
    console.log(`${menu} 주문 완료!`);
    step(menu);
  }, 1000);
};
const payCoffee = (menu, step) => {
  setTimeout(() => {
    console.log(`${menu} 결제 완료!`);
    step(menu);
  }, 2000);
};
const makeCoffee = (menu, step) => {
  setTimeout(() => {
    console.log(`${menu} 제조 완료!`);
    step(menu);
  }, 5000);
};
const takeoutCofffee = (menu) => {
  setTimeout(() => {
    console.log(`${menu} 수령 완료!`);
  }, 2000);
};

orderCoffee("아메리카노", () => {
  payCoffee("아메리카노", () => {
    makeCoffee("아메리카노", () => {
      takeoutCofffee("아메리카노");
    });
  });
});

/* 비동기 참사 ex
setTimeout(() => {
  orderCoffee();
}, 2000);
setTimeout(() => {
  payCoffee();
}, 1000);
setTimeout(() => {
  makeCoffee();
}, 5000);
setTimeout(() => {
  takeoutCofffee();
}, 7000);
 */

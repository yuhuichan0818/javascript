// 피자 만들기
// 도우 > 소스 > 토핑 > 치즈 > 화덕 = 완성

class pizza {
  #dough;
  #sauce;
  #topping;
  #cheese;

  constructor(dough, sauce, topping, cheese) {
    this.#dough = dough;
    this.#sauce = sauce;
    this.#topping = topping;
    this.#cheese = cheese;
  }
}

const dough = ["크러스트", "씬"];
const sauce = ["토마토", "굴"];
const topping = ["페퍼로니", "감자", "파인애플", "새우"];
const cheese = ["파마산", "체다", "모짜렐라"];

const newPizza = new pizza(dough, sauce, topping, cheese);

const makeDough = (step) => {
  setTimeout(() => {
    console.log(`도우 반죽 완료`);
    step();
  }, 5000);
};

const spreadSauce = (step) => {
  setTimeout(() => {
    console.log(`소스 다 뿌림`);
    step();
  }, 2000);
};

const spreadTopping = (step) => {
  setTimeout(() => {
    console.log(`토핑 다 뿌림`);
    step();
  }, 4000);
};

const spreadCheese = (step) => {
  setTimeout(() => {
    console.log(`치즈 다 뿌림`);
    step();
  }, 3000);
};

const baking = () => {
  setTimeout(() => {
    console.log(`피자 다 구움`);
  }, 10000);
};

makeDough(() => {
  spreadSauce(() => {
    spreadTopping(() => {
      spreadCheese(() => {
        baking();
      });
    });
  });
});

const obj = {
  name: "porsche",
  model: "잘몰라요",
  speed: 0,
  speedUP() {
    this.speed = this.speed + 10;
  },
  speedDown() {
    this.speed = this.speed < 10 ? 0 : this.speed - 10;
  },
  break() {
    this.speed = 0;
  },
  show() {
    console.log(`${this.name}의 속도: ${this.speed}`);
  },
};

const calc = {
  first: Number(window.prompt("첫 번째 숫자")),
  second: Number(window.prompt("두 번째 숫자")),
  result: Number(),
  plus() {
    this.result = this.first + this.second;
  },
  minus() {
    this.result = this.first - this.second;
  },
  multiply() {
    this.result = this.first * this.second;
  },
  square() {
    this.result = this.first ** this.second;
  },
  this() {
    this.result = this.first / this.second;
  },
  show() {
    console.log(
      `현재 두 값은 ${this.first}, ${this.second}입니다. result 값은 ${this.result} 입니다`,
    );
  },
};

calc.show();

calc.plus();
const a = calc.result;
console.log(a);

calc.multiply();
const b = calc.result;
console.log(b);

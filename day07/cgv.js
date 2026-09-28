const cgv = {
  name: ["오디세이", "코난", "스파이더맨", "귀멸의 칼날"],
  seat: { standard: 15000, recliner: 18000, IMAX: 20000, light: 10000 },
  popcorn: { salt: 8000, caramel: 8500, cheese: 9000 },
  beverage: { coke: 2500, coffee: 4000, ade: 5000, beer: 7000 },
  snack: { nacho: 4000, hotdog: 5000, squid: 7000 },

  user_name: window.prompt("보고 싶은 영화는?"),
  user_seat: window.prompt("무슨 좌석?"),
  user_age: +window.prompt("몇 살이세요?"),
  user_popcorn: window.prompt("팝콘 뭐먹어요?"),
  user_beverage: window.prompt("음료 뭐마셔요?"),
  user_snack: window.prompt("추가 뭐먹어요?"),

  adult: Boolean(),
  adultPrice: Number(),
  price: Number(),

  isAdult() {
    this.adult = this.user_age >= 20 && this.user_age <= 65 ? true : false;
    this.adultPrice = this.adult == true ? 1 : 0.8;
  },

  getPrice() {
    this.price =
      this.seat[this.user_seat] * this.adultPrice +
      this.popcorn[this.user_popcorn] +
      this.beverage[this.user_beverage] +
      this.snack[this.user_snack];
  },

  show() {
    console.log(
      `영화: ${this.user_name}, 좌석: ${this.user_seat}, 팝콘: ${this.user_popcorn}, 음료: ${this.user_beverage}, 스낵: ${this.user_snack}, 총 금액: ${this.price}원 입니다.`,
    );
  },
};

cgv.isAdult();
cgv.getPrice();
cgv.show();

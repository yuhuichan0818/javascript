// 신버전 변수&함수 같이 있어야 한다.

// 가격[price], 연도[year], 주행거리[mileage], 사고유무[hasAccident], 침수여부[hasFlooding]
// class Car {
//   #price = 100;
//   #year = 2020;
//   #mileage = 12000;
//   #hasAccident = false;
//   #hasFlooding = false;
// }

// class Car {
//   price;
//   year;
//   mileage;
//   hasAccident;
//   hasFlooding;

//   // 만들게
//   constructor(a, b, c) {
//     this.price = a;
//     this.year = b;
//     this.mileage = c;
//     this.hasAccident = false;
//     this.hasFlooding = false;
//   }
// }
// const a = new Car(10000, 2010, 10000);
// console.log({ ...a });
// const b = new Car(30000, 2000, 50000);
// console.log({ ...b });

class medical_records {
  #visitedDate;
  #examine;
  #doctorName;

  constructor(a, b, c) {
    this.#visitedDate = a;
    this.#examine = b;
    this.#doctorName = c;
  }

  setVisitedDate(a) {
    if (!/^\d(4)-\d{2}-\d{2}$/.test(a)) {
      throw new Error("해당 날짜는 유효하지 않습니다");
    }

    const date = new Date(a);
    const today = new Date();
    if (today < date) {
      throw new Error("시간을 달리시는군요");
    }

    this.#visitedDate = date;
  }
}

// const a = new Date();
// console.log(a.toISOString().slice(0, 10).split("-"));

class Vet {
  #name;
  #age;
  #species;
  #medical_records;

  constructor(a, b, c) {
    this.#name = a;
    this.#age = b;
    this.#species = c;
    this.#medical_records = [];
  }

  setAge(age) {
    if (age < 0) {
      throw new Error("나이는 음수 안됨");
    }
    this.#age = age;
  }

  setMedical(a, b, c) {
    const medicalRecord = new medical_records(a, b, c);
    this.#medical_records.push(medicalRecord);
  }
}

const chorong = new Vet("Chorong", 4, "Scotish Fold");

chorong.setAge(6);
console.log(chorong);

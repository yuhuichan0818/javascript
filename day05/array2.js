// 짝수 가져오기
// const even = arr.filter((n) => n % 2 === 0);
// console.log(even);

const fruits = ["strawberry", "mandarin", "apple", "kiwi", "banana"];

// 글자수
// 글자 갯수 6개 이상 오이시! 아니면 스미마센
// 스펠링 i가 있으면 😊, 없으면 😂 나타내기

const newFruits = fruits.map((x) => x.length);
console.log(newFruits);

const cafe = ["americano", "latte", "tea", "frappuccino", "ade"];

const change = (x) => {
  if (x.includes("i") || x.includes("o")) {
    return x.length;
  } else return x.toUpperCase();
};

const newCafe1 = cafe.map(change);
console.log(newCafe1);

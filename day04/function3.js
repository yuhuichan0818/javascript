const Recipe = (detail) => {
  console.log("요리 준비");
  console.log("물끓이기");
  detail();
  console.log("맛있게 먹기");
};

const Ramen = () => {
  console.log("면 넣기");
  console.log("한번 뒤집어주고");
  console.log("3분 기다리기");
};

console.log(Recipe(Ramen));

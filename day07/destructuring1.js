const std = {
  name: "윤정은",
  age: 29,
  mbti: "ENFP",
  parttime: ["코인노래방", "옷가게", "도토루 카페"],
};

const { name, parttime, mbti } = std;
const [one, two, three] = parttime;

const a = three;

console.log(name);
console.log(parttime);
console.log(three);

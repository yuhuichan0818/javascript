const students = [
  { name: "김나단", age: 31 },
  { name: "이민욱", age: 27 },
  { name: "윤정은", age: 29 },
];

const newStudents = students.map((x, i) => {
  x.no = i;
  return x;
});

const company = [
  { name: "씨엘제로", location: "오사카" },
  { name: "라쿠텐", location: "도쿄" },
  { name: "메루카리", location: "도쿄" },
];

const newCompany = company.map((x, i) => {
  x.no = `00${i + 1}`;
  return x;
});

const japanClass = [
  { name: "A반", level: "basic", students: ["오찬식", "이민욱", "윤정은"] },
  { name: "B반", level: "advance", students: ["김나단", "김지원", "최강현"] },
];

// japnClass[0].name = `japnClass[0].name + ", C반"`

const makeStudents = (students, i) => {
  students = { no: i + 1, name: students };
  return students;
};

const newJapan = japanClass.map((x, i) => {
  x.no = i + 1;
  x.students = x.students.map(makeStudents);
  return x;
});

console.log(newStudents);
console.log(newCompany);
console.log(newJapan);

const students = [
  {
    name: "윤정은",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["회화책", "문법책", "단어책"],
  },
  {
    name: "오찬식",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["히라가나", "가타카나", "단어책"],
  },
  {
    name: "이민욱",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["한문책", "출석책", "단어책"],
  },
];

const newStudents = students.map((x, i) => {
  x.no = `00${i + 1}`;
  x.itBooks = x.itBooks.map((y, i) => {
    y = { name: y, no: i + 1, booksLength: y.length };
    return y;
  });
  x.japaneseBooks = x.japaneseBooks.map((z) => {
    z = { name: z };
    return z;
  });
  return x;
});

console.log(newStudents);

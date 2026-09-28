//Set : array value 받아서 압축

const s1 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

s1.add("커피");
s1.add("아이스크림");
console.log(s1);
console.log(s1.size);

const s2 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
const newList = [...s2];
console.log(s2);
console.log(newList);

const levelList = [...new Set([...data])];

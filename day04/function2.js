const add = (x, y) => {
  return x + y;
};

const makeArray = (a, b, c) => {
  return [a, b, c];
};

const operator = (x, y) => {
  a = x + y;
  b = x - y;
  c = x * y;
  d = x / y;
  e = x ** y;
  return { 합: a, 차: b, 곱: c, 나누기: d, 제곱: e };
};

const f = operator(4, 3);

console.log(f);

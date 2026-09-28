function compare(x, y) {
  if (x > y) {
    return x;
  } else return y;
}

function circle(radius) {
  x = radius * Math.PI * 2;
  y = radius ** 2 * Math.PI;
  return { 둘레: x, 넓이: y };
}

const a = circle(6);
console.log(a);

const bg = document.createElement("div");
bg.style.cssText = `max-width: 1920px;
    width: 100%;
    flex: grid;
    grid-template-columns: repeat(5,1fr);`;

// hex code 뽑기
const hex = [..."0123456789abcdef"];
const counts = +prompt("몇 개?");

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const pallete = Array(counts)
  .fill(undefined)
  .map((x) => {
    let y = Array(6)
      .fill(undefined)
      .map((x) => (x = hex[randomInt(15, 0)]));
    x = y.reduce((a, c) => a + c);
    return `#${x}`;
  });

Array(counts)
  .fill(undefined)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.style.cssText = `width: 100%; height: 200px; background-color: ${pallete[i]}`;
    bg.append(box);
  });

document.body.append(bg);

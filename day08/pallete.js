const bg = document.createElement("div");

bg.style.maxWidth = "1920px";
bg.style.width = "100%";
bg.style.height = "100vh";

bg.style.display = "grid";
bg.style.gridTemplateColumns = "repeat(5, 1fr)";
bg.style.gridTemplateRows = "repeat(4, 1fr)";

bg.style.justifyContent = "center";
bg.style.alignItems = "center";

const pallete = [
  "red",
  "blue",
  "green",
  "grey",
  "black",
  "purple",
  "violet",
  "#B8336A",
  "#726DA8",
  "#7D8CC4",
  "#A0D2DB",
  "#C490D1",
  "#3350B8",
  "#6DA87E",
  "#C7DBA0",
  "#90D1D1",
  "#B89233",
  "#B0A0DB",
  "#D19095",
  "#BE7EC4",
];

Array(20)
  .fill(undefined)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.backgroundColor = pallete[i];
    bg.append(box);
  });

document.body.append(bg);

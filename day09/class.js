// 엘리먼트 생성하고 꾸며주고 넣기

const newDiv = document.createElement("div");
newDiv.innerHTML = "제히 = 꼭, 부디, 모쪼록";

// newDiv.className = "yellow"; <- nope
newDiv.classList.add("yellow");
newDiv.classList.add("blue");
newDiv.classList.add("green");

newDiv.classList.toggle("red"); // 있으면 빼고, 없으면 넣고
newDiv.classList.toggle("blue");

document.body.append(newDiv);

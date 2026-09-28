// basic 형태
const a = document.createElement(window.prompt("어떤걸 원하십니까"));
a.innerHTML = window.prompt("어떤 내용 쓸까요");

// sytle 태그 이후 꾸미기
a.style.backgroundColor = "pink";

document.body.append(a);

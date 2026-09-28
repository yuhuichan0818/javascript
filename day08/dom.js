// 참조: array, object, function + window(브라우저), ducument(HTML), elemnet(Tag)
window.confirm("안녕하세요");
window.alert("잘가세요!");

const btn = document.createElement("button");
btn.innerHTML = "오늘은 수요일";
document.body.append(btn);
// html 문서, script 안에 defer 넣기

const tw = document.createElement("div");
tw.innerHTML = "2026-09-09";
document.body.append(tw);

const he = document.createElement("h1");
he.innerHTML = "js&html";
document.body.append(he);

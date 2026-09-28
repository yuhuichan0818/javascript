const a = document.createElement("div");

a.style.cssText = "width: 100px; height: 100px; border: 1px solid red;";

// a.style.width = "100px";
// a.style.height = "100px";
// a.style.display = "flex";
// a.style.justifyContent = "center";
// a.style.alignItems = "center";
// a.style.backgroundColor = "pink";

const btn = document.createElement("button");
btn.innerHTML = "hello";

a.append(btn);
document.body.append(a);

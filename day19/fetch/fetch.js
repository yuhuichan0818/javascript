// fetch(): Promise 리턴 - Response {} 형태
// const recipesTitle = map.

const load = document.querySelector("#load");
const loader = document.querySelector(".loader");

// 이벤트 클릭
load.addEventListener("click", (e) => {
  loader.classList.remove("hidden");
  //   recipesRaw;
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((v) => {
      const title = v.recipes.map((x) => x.name);
      title.forEach((x) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = x;
        document.body.append(newDiv);
      });
      loader.classList.add("hidden");
    });
});

const btnProduct = document.querySelector("#product");
const btnRecipe = document.querySelector("#recipe");
const btnUser = document.querySelector("#user");
const cardgrid = document.querySelector("#cardgrid");

const render = (main, link, title, num) => {
  cardgrid.textContent = "";
  fetch(`https://dummyjson.com/${main}`)
    .then((res) => res.json())
    .then((v) => {
      const list = v[main].map((x) => x);
      list.forEach((x) => {
        cardgrid.insertAdjacentHTML(
          "beforeend",
          `<article id="card">
            <img id="cardimage" src="${x[link]}" alt="" />
            <p id="cardc1">${x[title]}</p>
            <p id="cardc2">${x[num]}</p>
          </article>`,
        );
      });
    });
  document.body.append(cardgrid);
};

btnProduct.addEventListener("click", (e) => {
  render("products", "thumbnail", "title", "price");
});
btnRecipe.addEventListener("click", (e) => {
  render("recipes", "image", "name", "rating");
});
btnUser.addEventListener("click", (e) => {
  render("users", "image", "lastName", "university");
});

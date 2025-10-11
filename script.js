const recipes = [
  { title: "Pasta", image: "assets/pasta.png", desc: "Classic Italian pasta." },
  { title: "Pancakes", image: "assets/pancakes.png", desc: "Fluffy and delicious." },
  { title: "Salad", image: "assets/salad.png", desc: "Healthy and fresh." },
];

const container = document.getElementById("recipe-container");
const searchInput = document.getElementById("search");

function renderRecipes(list) {
  container.innerHTML = "";
  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}">
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <button class="view-btn">View Recipe</button>
    `;
    container.appendChild(card);
  });
}

renderRecipes(recipes);


searchInput.addEventListener("keyup", () => {
  const value = searchInput.value;
  const filtered = recipes.filter(r => r.title.includes(value));
  renderRecipes(filtered);
});


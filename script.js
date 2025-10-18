const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta made with eggs, cheese, and pancetta.",
    image: "assets/spaghetti.png",
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "Crispy toast topped with smashed avocado and seasoning.",
    image: "assets/avocado.png",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with creamy frosting.",
    image: "assets/chocolate.png",
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing and croutons.",
    image: "assets/caesar.png",
  },
  {
    id: 5,
    name: "Margherita Pizza",
    description: "Classic pizza topped with fresh mozzarella, basil, and tomato sauce.",
    image: "assets/margherita.png",
  },
  {
    id: 6,
    name: "Berry Smoothie",
    description: "A refreshing mix of strawberries, blueberries, and yogurt.",
    image: "assets/berry.png",
  },
];

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");

function displayRecipes(list) {
  container.innerHTML = "";
  if (list.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No recipes found ";
    message.style.textAlign = "center";
    message.style.fontSize = "2rem";
    message.style.fontWeight = "bold";     
    message.style.color = "#000000";      
    message.style.marginTop = "20px";
    message.style.marginTop = "20px";

    container.appendChild(message);
    return;
  }
  list.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="content">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <button class="view-btn" data-id="${recipe.id}">View Recipe</button>
      </div>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const recipeId = e.target.dataset.id;
      const recipe = recipes.find((r) => r.id == recipeId);
      alert(` ${recipe.name} `);
    });
  });
}

function handleSearch() {
  const query = searchInput.value; 
  if (query.trim() === "") {
  return;
  }
  const filtered = recipes.filter((r) =>
    r.name.includes(query) 
  );
  displayRecipes(filtered);
}

searchInput.addEventListener("input", handleSearch);
displayRecipes(recipes);


export default function createMeal(meal) {
    const card = document.createElement("div");
    card.classList.add("meal");

    const image = new Image();
    image.src = meal.img;
    image.setAttribute("alt", "Meal");

    const mealName = document.createElement("p");
    mealName.classList.add("mealName");
    mealName.textContent = meal.name;

    const mealIngredients = document.createElement("p");
    mealIngredients.classList.add("mealIngredients");
    meal.ingredients.forEach((ingredient,index) => {
        mealIngredients.textContent += ingredient;
        mealIngredients.textContent += 
        index != meal.ingredients.length -1 ? ", " : ".";
    });

    const mealPrice = document.createElement("p");
    mealPrice.classList.add("mealPrice");
    mealPrice.textContent = meal.price;

    card.append(image,mealName,mealIngredients,mealPrice);
    return card;
}
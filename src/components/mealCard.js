export default function createMeal(meal) {
    const card = document.createElement("div");
    card.classList.add("meal");

    const img = new Image();
    img.src = meal.img;

    const mealName = document.createElement("p");
}
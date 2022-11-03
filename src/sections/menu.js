import createMeal from "../components/mealCard.js";
import meals from "../data/meals.js";

export default function createMenu() {
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("meals");

    meals.forEach((meal) => {
        const card = createMeal(meal);
        parentContainer.append(card);
    });

    return parentContainer;
}
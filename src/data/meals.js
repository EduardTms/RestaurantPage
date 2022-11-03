import burger from '/src/assets/img/burger.png';
import burrito from '/src/assets/img/burrito.png';
import chipsGuacamole from '/src/assets/img/chipsGuacamole.png';
import openTaco from '/src/assets/img/openTaco.png';
import quesadilla from '/src/assets/img/quesadilla.png';
import salad from '/src/assets/img/salad.png';
import tacos from '/src/assets/img/tacos.png';
import pastries from '/src/assets/img/pastries.png';

const meals = [
    {
        img: burrito,
        name: "Burrito",
        ingredients: [
            "Beef",
            "White rice",
            "Corn",
            "Black beans",
            "Cabbage",
            "Tomato",
            "Onion",
            "Cheese",
            "Cilantro"
        ],
        price: "$13.00",
    },
    {
        img: tacos,
        name: "Tacos",
        ingredients: [
            "Beef",
            "Chili powder",
            "Onion powder",
            "Lettuce",
            "Tomato sauce",
            "Cheddar",
            "Salsa"
        ],
        price: "$10.50",
    },
    {
        img: quesadilla,
        name: "Quesadilla",
        ingredients: [
            "Mushrooms",
            "Avocado",
            "Lettuce",
            "Chicken",
            "Tomato",
            "Green Onion",
            "Cheddar",
            "Butter"
        ],
        price: "$15.50",
    },
    {
        img: salad,
        name: "Salad",
        ingredients: [
            "Chicken",
            "Avocado",
            "Lettuce",
            "Tomato",
            "Green Onion",
            "Salsa"
        ],
        price: "$15.50",
    },
    {
        img: openTaco,
        name: "Open Taco",
        ingredients: [
            "Chicken",
            "Paprika",
            "Oregano",
            "Garlic Powder",
            "Avocado",
            "Green Onion",
            "Lime",
            "Canola Oil"
        ],
        price: "$13.50",
    },
    {
        img: burger,
        name: "Beef Burger",
        ingredients: [
            "Lean Beef",
            "Egg",
            "Onion",
            "Garlic",
            "Mayo",
            "Ketchup",
            "Cheddar",
            "Lettuce"
        ],
        price: "$18.50",
    },
    {
        img: pastries,
        name: "Pastries",
        ingredients: [
            "Apples",
            "Raisins",
            "Egg",
            "Cinnamon",
            "Powdered Sugar",
            "Sugar",
        ],
        price: "$6.00",
    },
    {
        img: chipsGuacamole,
        name: "Guacamole Chips",
        ingredients: [
            "Avocado",
            "Red onion",
            "Jalapeno",
            "Cilantro",
            "Lime juice",
            "Tortilla chips",
        ],
        price: "$8.00",
    },
];

export default meals;
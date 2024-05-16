// menu.js
import { menuData } from './menuData.js';

export default function menu(sectionId) {
    const menuSection = document.createElement("div");
    menuSection.classList.add("tab");
    menuSection.id = sectionId;

    for (const [category, dishes] of Object.entries(menuData)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category; // No need to capitalize here, handle it in CSS
        categoryDiv.appendChild(categoryTitle);

        dishes.forEach(dish => {
            const dishDiv = document.createElement('div');
            dishDiv.classList.add('menu-item');

            const dishTitle = document.createElement('h3');
            dishTitle.textContent = dish.title;
            dishDiv.appendChild(dishTitle);

            const dishImage = document.createElement('img');
            dishImage.src = dish.image;
            dishImage.alt = dish.title;
            dishDiv.appendChild(dishImage);

            const ingredientsList = document.createElement('ul');
            dish.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });
            dishDiv.appendChild(ingredientsList);

            const weight = document.createElement('p');
            weight.textContent = `Weight: ${dish.weight}`;
            dishDiv.appendChild(weight);

            const price = document.createElement('p');
            price.textContent = `Price: ${dish.price}`;
            dishDiv.appendChild(price);

            categoryDiv.appendChild(dishDiv);
        });

        menuSection.appendChild(categoryDiv);
    }

    return menuSection;
}
const dishes = [
    { name: "Drip Coffee", price: 2.95 },
    { name: "Muffin", price: 3.50 },
    { name: "Iced Coffee", price: 2.95 },
    { name: "Breakfast Burrito", price: 9.50 },
    { name: "Breakfast Sandwich", price: 7.00 },
    { name: "Club Panini", price: 14.00 },
    { name: "Chicken Fajitas", price: 15.17 },
    { name: "Tacos", price: 14.86 },
    { name: "Veggie Torta", price: 13.03 }
];

let mealPlan = [];

function renderDishList() {
    const dishList = document.getElementById('dish-list');
    dishList.innerHTML = ''; // Clear the list

    dishes.forEach((dish, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('dish-item');
        listItem.innerHTML = `
            <span>${dish.name} - $${dish.price.toFixed(2)}</span>
            <button class="add-to-plan" data-index="${index}">Add to Plan</button>
        `;
        dishList.appendChild(listItem);
    });

    // Add event listener to "Add to Plan" buttons
    const addButtons = document.querySelectorAll('.add-to-plan');
    addButtons.forEach(button => {
        button.addEventListener('click', addToMealPlan);
    });
}

function addToMealPlan(event) {
    const index = event.target.getAttribute('data-index');
    const dish = dishes[index];

    const existingDishIndex = mealPlan.findIndex(item => item.name === dish.name);

    if (existingDishIndex >= 0) {
        // Dish already in plan, increase the quantity
        mealPlan[existingDishIndex].quantity += 1;
    } else {
        // Add new dish to the plan
        mealPlan.push({ ...dish, quantity: 1 });
    }

    renderMealPlan();
}

function renderMealPlan() {
    const mealPlanList = document.getElementById('meal-plan-list');
    const totalAmount = document.getElementById('total-amount');
    mealPlanList.innerHTML = ''; // Clear the list

    let total = 0;

    mealPlan.forEach((dish, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('meal-plan-item');
        listItem.innerHTML = `
            <span>${dish.name} (x${dish.quantity}) - $${(dish.price * dish.quantity).toFixed(2)}</span>
            <button class="remove-from-plan" data-index="${index}">Remove</button>
            <button class="increase-quantity" data-index="${index}">+1</button>
        `;
        mealPlanList.appendChild(listItem);

        const removeButton = listItem.querySelector('.remove-from-plan');
        const increaseButton = listItem.querySelector('.increase-quantity');

        removeButton.addEventListener('click', removeFromMealPlan);
        increaseButton.addEventListener('click', increaseQuantity);

        total += dish.price * dish.quantity;
    });

    totalAmount.textContent = total.toFixed(2);
}

function removeFromMealPlan(event) {
    const index = event.target.getAttribute('data-index');
    mealPlan.splice(index, 1); // Remove dish from array
    renderMealPlan();
}

function increaseQuantity(event) {
    const index = event.target.getAttribute('data-index');
    mealPlan[index].quantity += 1;
    renderMealPlan();
}

renderDishList();
renderMealPlan();

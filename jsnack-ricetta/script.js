const addButton = document.getElementById('addingredient');
const generateButton = document.getElementById('generatedish');
const ingredientInput = document.getElementById('ingredientInput');
const shoppingListElement = document.querySelector('shoppingList');
let ingredients = [];

addButton.addEventListener('click', function(){
    ingredientsToAdd = ingredientInput.value;
    ingredients.push(ingredientsToAdd);

    shoppingListElement.innerText
    
    console.log(ingredients)
    ingredientInput.value = '';
});


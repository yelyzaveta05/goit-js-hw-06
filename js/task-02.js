const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients'); 

const ingredientsEl = ingredients.map(ingredient => {
  
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  
  return itemEl
});

list.append(...ingredientsEl);

console.log(list)


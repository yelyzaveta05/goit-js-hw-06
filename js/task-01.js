const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

// const categoryTitleEl = document.querySelector('li');
// const categoryTitle = categoryTitleEl.firstElementChild.textContent;
// console.log('Category:', categoryTitle);

const firstCategoryTitleEl = document.querySelector('h2');
console.log('Category:', firstCategoryTitleEl.textContent);

const categoryNextEl = firstCategoryTitleEl.nextElementSibling;
const firstCategoryAmountEl = categoryNextEl.children
console.log('Elements:', firstCategoryAmountEl.length);

// 

const secondCategoryEl = document.querySelector('.item');
const secondCategoryTitle = secondCategoryEl.nextElementSibling.firstElementChild;
console.log('Category:', secondCategoryTitle.textContent);

const secondCategoryAmountEl = secondCategoryTitle.nextElementSibling.children;
console.log('Elements:', secondCategoryAmountEl.length);

//

const thirdCategoryEl = document.querySelector('#categories');

const thirdCategoryTitleEl = thirdCategoryEl.lastElementChild.firstElementChild;
console.log('Category:', thirdCategoryTitleEl.textContent);

const thirdCategoryAmountEl = thirdCategoryTitleEl.nextElementSibling.children;
console.log('Elements:', thirdCategoryAmountEl.length);
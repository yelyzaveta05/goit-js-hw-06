// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const body = document.querySelector('body')
const changeColorBtn = document.querySelector('.change-color');
console.log(changeColorBtn)
changeColorBtn.addEventListener('click', function (color) {
  const input = color.currentTarget;
  getRandomHexColor(input);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
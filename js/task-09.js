function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
  bodyEl.style.backgroundColor = getRandomHexColor();
  const newBcgColor = bodyEl.style.backgroundColor;
  spanEl.innerHTML = newBcgColor;
};
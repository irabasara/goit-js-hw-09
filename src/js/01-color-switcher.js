function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let colorSwitcher = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopClick);

function onStartBtn() {
  colorSwitcher = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled', 'disabled');
  }, 1000);
}

function onStopClick() {
  clearInterval(colorSwitcher);
  startBtn.removeAttribute('disabled', 'disabled');
  stopBtn.setAttribute('disabled', 'disabled');
}

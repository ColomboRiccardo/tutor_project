const button = document.getElementById('button');
const timesClicked = document.getElementById('times-clicked');

let clicksNumber = 0;

function countClicks() {
	clicksNumber++;
	timesClicked.innerHTML = clicksNumber;
}

button.addEventListener('click', countClicks);

const mainElement = document.getElementById('main');
mainElement.remove()

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const yourName = "Alejandrp";
newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);

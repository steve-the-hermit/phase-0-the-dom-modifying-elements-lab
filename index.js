// Write your code here!
// index.js
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

const header = document.querySelector('header');
header.appendChild(newHeader);

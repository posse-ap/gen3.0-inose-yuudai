"use strict"

function butotnClick() {
    this.style.backgroundColor = "#0000ff";
}

let button = document.getElementById('red');
button.addEventListener('click', butotnClick);

function butotnClicks() {
    this.style.backgroundColor = "#ff0000";
}

let button2 = document.getElementById('blue');
button.addEventListener('click', butotnClicks);
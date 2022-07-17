"use strict"

function buttonClick() {
    this.style.backgroundColor = "#0000ff";
}

let button = document.getElementById('red');
button.addEventListener('click', buttonClick);

function buttonClicks() {
    this.style.backgroundColor = "#ff0000";
}

let button2 = document.getElementById('blue');
button.addEventListener('click', buttonClicks);
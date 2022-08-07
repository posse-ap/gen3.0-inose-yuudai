"use strict";


function buttonClick() {
    button.classList.add("choice-true");
    button11.classList.add("commentary-correct");
}

let button = document.getElementById("1-t");

button.onclick = buttonClick;

let button11 = document.getElementById("target");


//↑押したら正解が出る１問目 選択肢１



function buttonClick2() {
    button2.classList.add("choice-false");
    button12.classList.add("commentary-incorrect")
}

let button2 = document.getElementById("1-f11");

button2.onclick = buttonClick2;

let button12 = document.getElementById("target-false")

function buttonClick3() {
    button3.classList.add("choice-false");
    button13.classList.add("commentary-incorrect")

}

let button3 = document.getElementById("1-f12", );

button3.onclick = buttonClick3;

let button13 = document.getElementById("target-false")


//↑押した時に不正解が出る１問目 選択肢２、３

function buttonClick0() {
    button0.classList.add("choice-stop")
}
let button0 = document.getElementById("full-target");

button0.onclick = buttonClick0;

//↑押した時に他のやつを押せなくする１問目

//↓これ以降命名規則変える

function buttonClick21() {
    button211.classList.add("choice-true");
    button212.classList.add("commentary-correct");
}

let button211 = document.getElementById("2-t");

button211.onclick = buttonClick21;

let button212 = document.getElementById("target2");


//↑押したら正解が出る2問目 選択肢3



function buttonClick22() {
    button221.classList.add("choice-false");
    button222.classList.add("commentary-incorrect")
}

let button221 = document.getElementById("2-f1");

button221.onclick = buttonClick22;

let button222 = document.getElementById("target-false2")



function buttonClick23() {
    button231.classList.add("choice-false");
    button232.classList.add("commentary-incorrect")

}

let button231 = document.getElementById("2-f2");

button231.onclick = buttonClick23;

let button232 = document.getElementById("target-false2")


//↑押した時に不正解が出る2問目 選択肢1、2

function buttonClick20() {
    button20.classList.add("choice-stop")
}
let button20 = document.getElementById("full-target2");

button20.onclick = buttonClick20;

//↑押した時に他のやつを押せなくする2問目


//↓３問目

function buttonClick31() {
    button311.classList.add("choice-true");
    button312.classList.add("commentary-correct");
}

let button311 = document.getElementById("3-t");

button311.onclick = buttonClick31;

let button312 = document.getElementById("target3");


//↑押したら正解が出る3問目 選択肢1



function buttonClick32() {
    button321.classList.add("choice-false");
    button322.classList.add("commentary-incorrect")
}

let button321 = document.getElementById("3-f1");

button321.onclick = buttonClick32;

let button322 = document.getElementById("target-false3")



function buttonClick33() {
    button331.classList.add("choice-false");
    button332.classList.add("commentary-incorrect")

}

let button331 = document.getElementById("3-f2");

button331.onclick = buttonClick33;

let button332 = document.getElementById("target-false3")


//↑押した時に不正解が出る3問目 選択肢2,3

function buttonClick30() {
    button30.classList.add("choice-stop")
}
let button30 = document.getElementById("full-target3");

button30.onclick = buttonClick30;

//↑押した時に他のやつを押せなくする3問目

//↓４問目

function buttonClick41() {
    button411.classList.add("choice-true");
    button412.classList.add("commentary-correct");
}

let button411 = document.getElementById("4-t");

button411.onclick = buttonClick41;

let button412 = document.getElementById("target4");


//↑押したら正解が出る4問目 選択肢1



function buttonClick42() {
    button421.classList.add("choice-false");
    button422.classList.add("commentary-incorrect")
}

let button421 = document.getElementById("4-f1");

button421.onclick = buttonClick42;

let button422 = document.getElementById("target-false4")



function buttonClick43() {
    button431.classList.add("choice-false");
    button432.classList.add("commentary-incorrect")

}

let button431 = document.getElementById("4-f2");

button431.onclick = buttonClick43;

let button432 = document.getElementById("target-false4")


//↑押した時に不正解が出る4問目 選択肢2,3

function buttonClick40() {
    button40.classList.add("choice-stop")
}
let button40 = document.getElementById("full-target4");

button40.onclick = buttonClick40;

//↑押した時に他のやつを押せなくする4問目

//↓5問目

function buttonClick51() {
    button511.classList.add("choice-true");
    button512.classList.add("commentary-correct");
}

let button511 = document.getElementById("5-t");

button511.onclick = buttonClick51;

let button512 = document.getElementById("target5");


//↑押したら正解が出る5問目 選択肢1



function buttonClick52() {
    button521.classList.add("choice-false");
    button522.classList.add("commentary-incorrect")
}

let button521 = document.getElementById("5-f1");

button521.onclick = buttonClick52;

let button522 = document.getElementById("target-false5")



function buttonClick53() {
    button531.classList.add("choice-false");
    button532.classList.add("commentary-incorrect")

}

let button531 = document.getElementById("5-f2");

button531.onclick = buttonClick53;

let button532 = document.getElementById("target-false5")


//↑押した時に不正解が出る5問目 選択肢2,3

function buttonClick50() {
    button50.classList.add("choice-stop")
}
let button50 = document.getElementById("full-target5");

button50.onclick = buttonClick50;

//↑押した時に他のやつを押せなくする5問目

//↓6問目

function buttonClick61() {
    button611.classList.add("choice-true");
    button612.classList.add("commentary-correct");
}

let button611 = document.getElementById("6-t");

button611.onclick = buttonClick61;

let button612 = document.getElementById("target6");


//↑押したら正解が出る6問目 選択肢2



function buttonClick62() {
    button621.classList.add("choice-false");
    button622.classList.add("commentary-incorrect")
}

let button621 = document.getElementById("6-f1");

button621.onclick = buttonClick62;

let button622 = document.getElementById("target-false6")



function buttonClick63() {
    button631.classList.add("choice-false");
    button632.classList.add("commentary-incorrect")

}

let button631 = document.getElementById("6-f2");

button631.onclick = buttonClick63;

let button632 = document.getElementById("target-false6")


//↑押した時に不正解が出る6問目 選択肢1,3

function buttonClick60() {
    button60.classList.add("choice-stop")
}
let button60 = document.getElementById("full-target6");

button60.onclick = buttonClick60;

//↑押した時に他のやつを押せなくする6問目
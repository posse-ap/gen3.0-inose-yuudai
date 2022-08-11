"use strict";

// 回答一覧
const ALL_QUIZ = [{
        question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
        answers: ['約28万人', '約79万人', '約183万人'],
        correctNumber: 1,
        note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
    },
    {
        question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
        answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
        correctNumber: 2,
    },
    {
        question: 'IoTとは何の略でしょう？',
        answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
        correctNumber: 0,
    },
    {
        question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        answers: ['Society 5.0', 'CyPhy', 'SDGs'],
        correctNumber: 0,
        note: 'Society5.0 - 科学技術政策 - 内閣府'
    },
    {
        question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        answers: ['Web3.0', 'NFT', 'メタバース'],
        correctNumber: 0,
    },
    {
        question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
        answers: ['約2倍', '約5倍', '約11倍'],
        correctNumber: 1,
        note: 'Accenture Technology Vision 2021'
    }
];

// ↑見たことないやつ


// {
//     /**
//      * @typedef QUIZ
//      * @property {number} correctNumber 問題番号
//      * @property {string | undefined} note ノート
//      * @property {string} question 問題文
//      * @property {string[]} answers 回答の配列
//      */

//     /**
//      * @description 問題と回答の定数
//      * @type {QUIZ[]}
//      */
//     const ALL_QUIZ = [{
//             id: 1,
//             question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
//             answers: ['約28万人', '約79万人', '約183万人'],
//             correctNumber: 1,
//             href: '経済産業省 2019年3月 － IT 人材需給に関する調査'
//         },
//         {
//             id: 2,
//             question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
//             answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
//             correctNumber: 2,
//         },
//         {
//             id: 3,
//             question: 'IoTとは何の略でしょう？',
//             answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
//             correctNumber: 0,
//         },
//         {
//             id: 4,
//             question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
//             answers: ['Society 5.0', 'CyPhy', 'SDGs'],
//             correctNumber: 0,
//             href: 'Society5.0 - 科学技術政策 - 内閣府'
//         },
//         {
//             id: 5,
//             question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
//             answers: ['Web3.0', 'NFT', 'メタバース'],
//             correctNumber: 0,
//         },
//         {
//             id: 6,
//             question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
//             answers: ['約2倍', '約5倍', '約11倍'],
//             correctNumber: 1,
//             href: 'Accenture Technology Vision 2021'
//         }
//     ];

//     /**
//      * @description クイズコンテナーの取得
//      * @type {HTMLElement}
//      */
//     const quizContainer = document.getElementById('js-quizContainer');









// /**
//  * @description クイズ１つ１つのHTMLを生成するための関数
//  * @param quizItem { QUIZ }
//  * @param questionNumber { number }
//  * @returns {string}
//  */
const createQuizHtml = (quizItem, questionNumber) => {

    /**
     * @description 回答の生成
     * @type {string}
     */
    const answersHtml = quizItem.answers.map((answer, answerIndex) => `<li class="choice">
        <button class="choice-button  js-answer" data-answer="${answerIndex}">
        ${answer}
    <i class="black-check">
</i>
</button>
    </li>`).join('');

    // 引用テキストの生成
    const noteHtml = quizItem.note ? `<cite class="href">
    <i class="mark">i>${quizItem.note}
</cite>` : '';




    return `<section  class="q-and-a js-quiz" data-quiz="${questionNumber}">
<div class="question_construct_all">
    <h3 class="q_image_quiz_text">
    <span class="q-label">Q${questionNumber + 1}</span>
    <span
        class="q-text">${quizItem.question}</span>
    </h3>
    <figure class="question-image">
    <img src="imgs/img-quiz0${quizItem.id}.png">
    </figure>
</div>
<div class="answer">
    <span class="q-a-label q-a-label-accent">A</span>
    <ul class="choices">
    ${answersHtml}
    </ul>
    <div class="p-quiz-box-answer-correct js-answerBox">
    <p class="commentary js-answerTitle"></p>
    <p class="answer-contents">
    <span class="answer-contents-label">A</span>
    <span class="js-answer-text"> </span>
    </p>
    </div>
</div>
${noteHtml}
</section>`
}

// /**
//  * @description 配列の並び替え
//  * @param arrays {Array}
//  * @returns {Array}
//  */
// const shuffle = arrays => {
//     const array = arrays.slice();
//     for (let i = array.length - 1; i >= 0; i--) {
//         const randomIndex = Math.floor(Math.random() * (i + 1));
//         [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
//     }
//     return array
// }

// /**
//  * @description quizArrayに並び替えたクイズを格納
//  * @type {Array}
//  */
// const quizArray = shuffle(ALL_QUIZ)

// /**
//  * @type {string}
//  * @description 生成したクイズのHTMLを #js-quizContainer に挿入
//  */

// quizContainer.innerHTML = quizArray.map((quizItem, index) => {
//     return createQuizHtml(quizItem, index)
// }).join('')

/**
 * @type {NodeListOf<Element>}
 * @description すべての問題を取得
 */
const allQuiz = document.querySelectorAll('.js-quiz');

/**
 * @description buttonタグにdisabledを付与
 * @param answers {NodeListOf<Element>}
 */
const setDisabled = answers => {
    answers.forEach(answer => {
        answer.disabled = true;
    })
}

/**
 * @description trueかfalseで出力する文字列を出し分ける
 * @param target {Element}
 * @param isCorrect {boolean}
 */
const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
}

/**
 * @description trueかfalseでクラス名を付け分ける
 * @param target {Element}
 * @param isCorrect {boolean}
 */
const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
}

/**
 * 各問題の中での処理
 */
allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            answer.classList.add('is-selected');
            const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));

            // 全てのボタンを非活性化
            setDisabled(answers);

            // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
            // ↓これちょっと違うかも
            const correctNumber = quizArray[selectedQuiz].correctNumber
            const isCorrect = correctNumber === selectedAnswerNumber;

            // 回答欄にテキストやclass名を付与
            // ↓これちょっと違うかも
            answerText.innerText = quizArray[selectedQuiz].answers[correctNumber];
            setTitle(answerTitle, isCorrect);
            setClassName(answerBox, isCorrect);
        })
    })
})















































// function buttonClick() {
//     button.classList.add("choice-true");
//     button11.classList.add("commentary-correct");
// }

// let button = document.getElementById("1-t");

// button.onclick = buttonClick;

// let button11 = document.getElementById("target");


// //↑押したら正解が出る１問目 選択肢１



// function buttonClick2() {
//     button2.classList.add("choice-false");
//     button12.classList.add("commentary-incorrect")
// }

// let button2 = document.getElementById("1-f11");

// button2.onclick = buttonClick2;

// let button12 = document.getElementById("target-false")

// function buttonClick3() {
//     button3.classList.add("choice-false");
//     button13.classList.add("commentary-incorrect")

// }

// let button3 = document.getElementById("1-f12", );

// button3.onclick = buttonClick3;

// let button13 = document.getElementById("target-false")


// //↑押した時に不正解が出る１問目 選択肢２、３

// function buttonClick0() {
//     button0.classList.add("choice-stop")
// }
// let button0 = document.getElementById("full-target");

// button0.onclick = buttonClick0;

// //↑押した時に他のやつを押せなくする１問目

// //↓これ以降命名規則変える

// function buttonClick21() {
//     button211.classList.add("choice-true");
//     button212.classList.add("commentary-correct");
// }

// let button211 = document.getElementById("2-t");

// button211.onclick = buttonClick21;

// let button212 = document.getElementById("target2");


// //↑押したら正解が出る2問目 選択肢3



// function buttonClick22() {
//     button221.classList.add("choice-false");
//     button222.classList.add("commentary-incorrect")
// }

// let button221 = document.getElementById("2-f1");

// button221.onclick = buttonClick22;

// let button222 = document.getElementById("target-false2")



// function buttonClick23() {
//     button231.classList.add("choice-false");
//     button232.classList.add("commentary-incorrect")

// }

// let button231 = document.getElementById("2-f2");

// button231.onclick = buttonClick23;

// let button232 = document.getElementById("target-false2")


// //↑押した時に不正解が出る2問目 選択肢1、2

// function buttonClick20() {
//     button20.classList.add("choice-stop")
// }
// let button20 = document.getElementById("full-target2");

// button20.onclick = buttonClick20;

// //↑押した時に他のやつを押せなくする2問目


// //↓３問目

// function buttonClick31() {
//     button311.classList.add("choice-true");
//     button312.classList.add("commentary-correct");
// }

// let button311 = document.getElementById("3-t");

// button311.onclick = buttonClick31;

// let button312 = document.getElementById("target3");


// //↑押したら正解が出る3問目 選択肢1



// function buttonClick32() {
//     button321.classList.add("choice-false");
//     button322.classList.add("commentary-incorrect")
// }

// let button321 = document.getElementById("3-f1");

// button321.onclick = buttonClick32;

// let button322 = document.getElementById("target-false3")



// function buttonClick33() {
//     button331.classList.add("choice-false");
//     button332.classList.add("commentary-incorrect")

// }

// let button331 = document.getElementById("3-f2");

// button331.onclick = buttonClick33;

// let button332 = document.getElementById("target-false3")


// //↑押した時に不正解が出る3問目 選択肢2,3

// function buttonClick30() {
//     button30.classList.add("choice-stop")
// }
// let button30 = document.getElementById("full-target3");

// button30.onclick = buttonClick30;

// //↑押した時に他のやつを押せなくする3問目

// //↓４問目

// function buttonClick41() {
//     button411.classList.add("choice-true");
//     button412.classList.add("commentary-correct");
// }

// let button411 = document.getElementById("4-t");

// button411.onclick = buttonClick41;

// let button412 = document.getElementById("target4");


// //↑押したら正解が出る4問目 選択肢1



// function buttonClick42() {
//     button421.classList.add("choice-false");
//     button422.classList.add("commentary-incorrect")
// }

// let button421 = document.getElementById("4-f1");

// button421.onclick = buttonClick42;

// let button422 = document.getElementById("target-false4")



// function buttonClick43() {
//     button431.classList.add("choice-false");
//     button432.classList.add("commentary-incorrect")

// }

// let button431 = document.getElementById("4-f2");

// button431.onclick = buttonClick43;

// let button432 = document.getElementById("target-false4")


// //↑押した時に不正解が出る4問目 選択肢2,3

// function buttonClick40() {
//     button40.classList.add("choice-stop")
// }
// let button40 = document.getElementById("full-target4");

// button40.onclick = buttonClick40;

// //↑押した時に他のやつを押せなくする4問目

// //↓5問目

// function buttonClick51() {
//     button511.classList.add("choice-true");
//     button512.classList.add("commentary-correct");
// }

// let button511 = document.getElementById("5-t");

// button511.onclick = buttonClick51;

// let button512 = document.getElementById("target5");


// //↑押したら正解が出る5問目 選択肢1



// function buttonClick52() {
//     button521.classList.add("choice-false");
//     button522.classList.add("commentary-incorrect")
// }

// let button521 = document.getElementById("5-f1");

// button521.onclick = buttonClick52;

// let button522 = document.getElementById("target-false5")



// function buttonClick53() {
//     button531.classList.add("choice-false");
//     button532.classList.add("commentary-incorrect")

// }

// let button531 = document.getElementById("5-f2");

// button531.onclick = buttonClick53;

// let button532 = document.getElementById("target-false5")


// //↑押した時に不正解が出る5問目 選択肢2,3

// function buttonClick50() {
//     button50.classList.add("choice-stop")
// }
// let button50 = document.getElementById("full-target5");

// button50.onclick = buttonClick50;

// //↑押した時に他のやつを押せなくする5問目

// //↓6問目

// function buttonClick61() {
//     button611.classList.add("choice-true");
//     button612.classList.add("commentary-correct");
// }

// let button611 = document.getElementById("6-t");

// button611.onclick = buttonClick61;

// let button612 = document.getElementById("target6");


// //↑押したら正解が出る6問目 選択肢2



// function buttonClick62() {
//     button621.classList.add("choice-false");
//     button622.classList.add("commentary-incorrect")
// }

// let button621 = document.getElementById("6-f1");

// button621.onclick = buttonClick62;

// let button622 = document.getElementById("target-false6")



// function buttonClick63() {
//     button631.classList.add("choice-false");
//     button632.classList.add("commentary-incorrect")

// }

// let button631 = document.getElementById("6-f2");

// button631.onclick = buttonClick63;

// let button632 = document.getElementById("target-false6")


// //↑押した時に不正解が出る6問目 選択肢1,3

// function buttonClick60() {
//     button60.classList.add("choice-stop")
// }
// let button60 = document.getElementById("full-target6");

// button60.onclick = buttonClick60;

// //↑押した時に他のやつを押せなくする6問目
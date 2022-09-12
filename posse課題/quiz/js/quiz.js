"use strict";

{
    /**
     * @typedef QUIZ
     * @property {number} correctNumber 問題番号
     * @property {string | undefined} note ノート
     * @property {string} question 問題文
     * @property {string[]} answers 回答の配列
     */

    /**
     * @description 問題と回答の定数
     * @type {QUIZ[]}
     */
    const ALL_QUIZ = [{
            id: 1,
            question: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
            answers: ["約28万人", "約79万人", "約183万人"],
            correctNumber: 1,
            href: "経済産業省 2019年3月 － IT 人材需給に関する調査",
        },
        {
            id: 2,
            question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
            answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
            correctNumber: 2,
        },
        {
            id: 3,
            question: 'IoTとは何の略でしょう？',
            answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
            correctNumber: 0,
        },
        {
            id: 4,
            question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
            answers: ['Society 5.0', 'CyPhy', 'SDGs'],
            correctNumber: 0,
            href: 'Society5.0 - 科学技術政策 - 内閣府'
        },
        {
            id: 5,
            question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
            answers: ['Web3.0', 'NFT', 'メタバース'],
            correctNumber: 0,
        },
        {
            id: 6,
            question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
            answers: ['約2倍', '約5倍', '約11倍'],
            correctNumber: 1,
            href: 'Accenture Technology Vision 2021'
        }
    ];

    /**
     * @description クイズコンテナーの取得
     * @type {HTMLElement}
     */
    const quizContainer = document.getElementById("js-quizContainer");

    /**
     * @description クイズ１つ１つのHTMLを生成するための関数
     * @param quizItem { QUIZ }
     * @param questionNumber { number }
     * @returns {string}
     */

    const createQuizHtml = (quizItem, questionNumber) => {
        /**
         * @description 回答の生成
         * @type {string}
         */
        const answersHtml = quizItem.answers
            .map(
                (answer, answerIndex) => `<li class="choice">
        <button class="choice-button js-answer" data-answer="${answerIndex}">
        ${answer}
    <i class="black-check"><img src="imgs/Polygon 1.svg" alt="">
</i>
</button>
    </li>`).join("");

        // 引用テキストの生成
        const hrefHtml = quizItem.href ?
            `<cite class="href">
    <i class="mark"><img src="imgs/icon-note.png"></i>${quizItem.href}
</cite>` : '';

        return `<section class="q-and-a js-quiz" data-quiz="${questionNumber}">
<div class="question_construct_all">
    <h3 class="q_image_quiz_text">
    <span class="q-a-label">Q${questionNumber + 1}</span>
    <span class="q-text">${quizItem.question}</span>
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
    <div class="p-quiz-box__answer__correct js-answerBox">
    <p class="commentary js-answerTitle"></p>
    <p class="answer-contents">
    <span class="answer-contents-label">A</span>
    <span class="js-answerText"></span>
    </p>
    </div>
    
</div>
${hrefHtml}
</section>`
    }

    /**
     *@description 配列の並び替え
     *@param arrays { Array } 
     *@returns { Array }
     */
    const shuffle = arrays => {
        const array = arrays.slice();
        for (let i = array.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array
    }

    /**
     *@description quizArrayに並び替えたクイズを格納
     *@type { Array }
     */
    const quizArray = shuffle(ALL_QUIZ)

    /**
     * @type {string}
     * @description 生成したクイズのHTMLを #js-quizContainer に挿入
     */

    quizContainer.innerHTML = quizArray.map((quizItem, index) => {
        return createQuizHtml(quizItem, index)
    }).join("")

    /**
     * @type {NodeListOf<Element>}
     * @description すべての問題を取得
     */
    const allQuiz = document.querySelectorAll(".js-quiz");

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
        target.innerText = isCorrect ? "正解！" : "不正解...";
    }

    /**
     * @description trueかfalseでクラス名を付け分ける
     * @param target {Element}
     * @param isCorrect {boolean}
     */
    const setClassName = (target, isCorrect) => {
        target.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    }

    /**
     * 各問題の中での処理
     */
    allQuiz.forEach(quiz => {
        const answers = quiz.querySelectorAll(".js-answer");
        const selectedQuiz = Number(quiz.getAttribute("data-quiz"));
        const answerBox = quiz.querySelector(".js-answerBox");
        const answerTitle = quiz.querySelector(".js-answerTitle");
        const answerText = quiz.querySelector(".js-answerText");

        answers.forEach(answer => {
            answer.addEventListener("click", () => {
                answer.classList.add("is-selected");
                const selectedAnswerNumber = Number(answer.getAttribute("data-answer"));

                // 全てのボタンを非活性化
                setDisabled(answers);

                // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納

                const correctNumber = quizArray[selectedQuiz].correctNumber
                const isCorrect = correctNumber === selectedAnswerNumber;

                // 回答欄にテキストやclass名を付与
                answerText.innerText = quizArray[selectedQuiz].answers[correctNumber];
                setTitle(answerTitle, isCorrect);
                setClassName(answerBox, isCorrect);
            })
        })
    })
}






// ↓自力で頑張った勲章。


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
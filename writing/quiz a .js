"use strict";

{
    const ALL_QUIZ = [{
            id: 1,
            question: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
            answers: ["約28万人", "約79万人", "約183万人"],
            correctNumber: 1,
            href: "経済産業省 2019年3月 － IT 人材需給に関する調査",
        },
        {
            id: 2,
            question: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
            answers: ["INTECH", "BIZZTECH", "X-TECH"],
            correctNumber: 2,
        },
        {
            id: 3,
            question: "IoTとは何の略でしょう？",
            answers: [
                "Internet of Things",
                "Integrate into Technology",
                "Information on Tool",
            ],
            correctNumber: 0,
        },
        {
            id: 4,
            question: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
            answers: ["Society 5.0", "CyPhy", "SDGs"],
            correctNumber: 0,
            href: "Society5.0 - 科学技術政策 - 内閣府",
        },
        {
            id: 5,
            question: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
            answers: ["Web3.0", "NFT", "メタバース"],
            correctNumber: 0,
        },
        {
            id: 6,
            question: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
            answers: ["約2倍", "約5倍", "約11倍"],
            correctNumber: 1,
            href: "Accenture Technology Vision 2021",
        },
    ];

    const createQuizHtml = function(quizItem, questionNumber) {
        const answersHtml = quizItem.answers.map(
            (answer, answerIndex) => `<li class="choice">
        <button class="choice-button js-answer" data-answer="${answerIndex}">
        ${answer}
    <i class="black-check"><img src="imgs/Polygon 1.svg" alt="">
</i></button></li>`).join("");

        const hrefHtml = quizItem.href ?
            `<cite class="href">
    <i class="mark"><img src="imgs/icon-note.png"></i>${quizItem.href}
</cite>` : "";

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
</section>`;
    };

    const shuffle = (arrays) => {
        const array = arrays.slice();
        for (let i = array.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    };

    const quizArray = shuffle(ALL_QUIZ);

    const quizContainer = document.getElementById("js-quizContainer");

    quizContainer.innerHTML = quizArray
        .map(function(quizItem, questionNumber) {
            return createQuizHtml(quizItem, questionNumber);
        })
        .join("");
    const allQuiz = document.querySelectorAll(".js-quiz");

    allQuiz.forEach((quiz) => {
        const selectedQuiz = Number(quiz.getAttribute("data-quiz"));
        const answerBox = quiz.querySelector(".js-answerBox");
        const answerTitle = quiz.querySelector(".js-answerTitle");
        const answerText = quiz.querySelector(".js-answerText");
        const answers = quiz.querySelectorAll(".js-answer");

        answers.forEach((answer) => {
            const setClassName = (target, isCorrect) => {
                target.classList.add(isCorrect ? "is-correct" : "is-incorrect");
            };
            const setTitle = (target, isCorrect) => {
                target.innerText = isCorrect ? "正解！" : "不正解...";
            };
            const setDisabled = (answers) => {
                answers.forEach((answer) => {
                    answer.disabled = true;
                });
            };
            answer.addEventListener("click", () => {
                answer.classList.add("is-selected");

                const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));
                // 全てのボタンを非活性化
                setDisabled(answers);
                // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
                const correctNumber = quizArray[selectedQuiz].correctNumber;
                const isCorrect = correctNumber === selectedAnswerNumber;

                // 回答欄にテキストやclass名を付与
                answerText.innerText = quizArray[selectedQuiz].answers[correctNumber];
                setTitle(answerTitle, isCorrect);
                setClassName(answerBox, isCorrect);
            });

        });

    });
}
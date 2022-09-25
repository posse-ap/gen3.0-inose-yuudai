'use strict';

{
    /**
     * @typedef QUIZ
     * @property {number} correctNumber 問題番号
     * @property {string | undefined} note ノート
     * @property {string} question 問題文
     * @property {string[]} answers 回答の配列
     */


    // stringは文字列

    /**
     * @description 問題と回答の定数
     * @type {QUIZ[]}
     */
    const ALL_QUIZ = [{
            id: 1,
            question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
            answers: ['約28万人', '約79万人', '約183万人'],
            correctNumber: 1,
            note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
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
            note: 'Society5.0 - 科学技術政策 - 内閣府'
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
            note: 'Accenture Technology Vision 2021'
        }
    ];

    /**
     * @description クイズコンテナーの取得
     * @type {HTMLElement}
     */
    const quizContainer = document.getElementById('js-quizContainer');

    // js-quizContainerのidがついているhtml文書を取得

    /**
     * @description クイズ１つ１つのHTMLを生成するための関数
     * @param quizItem { QUIZ }
     * @param questionNumber { number }
     * @returns {string}
     */



    const createQuizHtml = (quizItem, questionNumber) => {
        // quizItem,questionNumberという引数に対し、アロー関数以降で関数の本体が語られている

        /**
         * @description 回答の生成
         * @type {string}
         */
        const answersHtml = quizItem.answers.map((answer, answerIndex) =>
            // map(値、インデックス、配列)の3つの因数を記述できる。今回は、answerの値と配列の要素の位置を取得している
            `<li class="p-quiz-box__answer__item">
        <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
          ${answer}<i class="u-icon__arrow"></i>
        </button>
      </li>`).join('');
        // このjoinによって空文字の「''」を代入することでmap以降の要素を全て連結できる

        // 引用テキストの生成
        const noteHtml = quizItem.note ? `<cite class="p-quiz-box__note">
      <i class="u-icon__note"></i>${quizItem.note}
    </cite>` : '';
        // ifが使われている「あればノートを出す、なかったら出さない
        // 出さないっていうより''空白を出す
        // returnで以下を返す


        return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
      <div class="p-quiz-box__question">
        <h2 class="p-quiz-box__question__title">
          <span class="p-quiz-box__label">Q${questionNumber + 1}</span>
          <span
            class="p-quiz-box__question__title__text">${quizItem.question}</span>
        </h2>
        <figure class="p-quiz-box__question__image">
          <img src="../assets/img/quiz/img-quiz0${quizItem.id}.png" alt="">
        </figure>
      </div>
      <div class="p-quiz-box__answer">
        <span class="p-quiz-box__label p-quiz-box__label--accent">A</span>
        <ul class="p-quiz-box__answer__list">
          ${answersHtml}
        </ul>
        <div class="p-quiz-box__answer__correct js-answerBox">
          <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
          <p class="p-quiz-box__answer__correct__content">
            <span class="p-quiz-box__answer__correct__content__label">A</span>
            <span class="js-answerText"></span>
          </p>
        </div>
      </div>
      ${noteHtml}
    </section>`
    }




    // ---------------

    /**
     * @description 配列の並び替え
     * @param arrays {Array}
     * @returns {Array}
     */
    const shuffle = arrays => {
            const array = arrays.slice();
            // このsliceの中には開始位置と終了位置が省略されている
            for (let i = array.length - 1; i >= 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                // Math.floor()は小数点以下切り上げ
                // Math.random０以上１未満の乱数を発生
                // ↑かけるi+1
                [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
                // フィッシャー–イェーツアルゴリズムによるシャッフル
                //const tmp = array[1];
                // array[1] = array[randomIndex]
                // array[randomIndex] = tmp
                // こっちの方が好き
            }
            return array
        }
        // Math.randomで０以上１未満の数かけるiの数＋１
        // sliceでarraysの中身を全て取り出している
        // iを配列（array)の長さ-1として、iが0以上の時iを１ずつ引き続ける


    /**
     * @description quizArrayに並び替えたクイズを格納
     * @type {Array}
     */
    // arrayとは配列
    const quizArray = shuffle(ALL_QUIZ)

    /**
     * @type {string}
     * @description 生成したクイズのHTMLを #js-quizContainer に挿入
     */

    quizContainer.innerHTML = quizArray.map((quizItem, index) => {
            return createQuizHtml(quizItem, index)
        }).join('')
        // joinで結合
        /**
         * @type {NodeListOf<Element>}
         * @description すべての問題を取得
         */
    const allQuiz = document.querySelectorAll('.js-quiz');
    // js-quizのクラスがついたhtml文書を全て取得している
    /**
     * @description buttonタグにdisabledを付与
     * @param answers {NodeListOf<Element>}
     */
    const setDisabled = answers => {
        answers.forEach(answer => {
            answer.disabled = true;
        })
    }

    // forEach メソッドは配列に含まれる要素を先頭から順に取り出しコールバック関数を呼び出します。コールバック関数は、現在取り出されている要素の値、要素のインデックス、そして配列そのものを引数にして呼び出されます
    /**
     * @description trueかfalseで出力する文字列を出し分ける
     * @param target {Element}
     * @param isCorrect {boolean}
     */
    const setTitle = (target, isCorrect) => {
            target.innerText = isCorrect ? '正解！' : '不正解...';
        }
        //  ?でif分と同じような役割を果たしている
        // isCorrectの場合のみ正解の文字を付与。 そうじゃなかったら不正解下も同様
        // どうなったらisCorrectかというと、215行目あたり

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
         * quiz単体は初めて出てきた
         */
    allQuiz.forEach(quiz => {
        const answers = quiz.querySelectorAll('.js-answer');
        // js-answerがついたhtml文書を全て取得している
        const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
        // getAttributeは指定された値（今回の場合はnumberを返すdata-quizから持ってきて
        const answerBox = quiz.querySelector('.js-answerBox');
        // js-answerがついた最初のhtml文書を取得している
        const answerTitle = quiz.querySelector('.js-answerTitle');
        // js-answerTitleがついたhtml文書を全て取得している
        const answerText = quiz.querySelector('.js-answerText');
        // js-answerTextがついたhtml文書を全て取得している

        answers.forEach(answer => {
            // clickしたら発火する
            answer.addEventListener('click', () => {
                answer.classList.add('is-selected');
                const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));

                // 全てのボタンを非活性化
                setDisabled(answers);
                // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
                const correctNumber = quizArray[selectedQuiz].correctNumber
                const isCorrect = correctNumber === selectedAnswerNumber;
                // これでisCorrect を判断している
                // 回答欄にテキストやclass名を付与
                answerText.innerText = quizArray[selectedQuiz].answers[correctNumber];
                setTitle(answerTitle, isCorrect);
                setClassName(answerBox, isCorrect);
                // answerTextで
                // answerBoxに正解か否かと正しい答えをいれる
            })
        })
    })
}

// 167行目のindex


// {}の中で定義している

// questionNumberの正体
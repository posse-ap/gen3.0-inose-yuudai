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

const quizContainer = document.getElementById("js-quizContainer");


const createQuizHtml = (quizitem, )
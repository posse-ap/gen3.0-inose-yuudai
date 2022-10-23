"use strict"; {
    // モーダル部分の設定
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        finish__open.classList.remove("open")
    });

    // モーダルを開く

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        hide.classList.remove("hide")
        loading.classList.remove("loader")
        body.classList.remove('overflow-hidden');
        modal.classList.remove("one-screen");
    });

    // モーダルをとじる

    mask.addEventListener('click', () => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
        // バツ印以外押しても消えるよ！
    });
    const hide = document.getElementById("modal-otherthan-close")
    const load = document.getElementById('opened-log-and-submit');
    const loading = document.getElementById('loading');
    const finish__open = document.getElementById("finish-finish");
    const body = document.getElementById("bodybody");

    load.addEventListener("click", () => {
        hide.classList.add("hide");
        // バツ印以外をけす
        modal.classList.add("one-screen");
        body.classList.add('overflow-hidden')
            // 提出押したら画面が動かないようにする

        //バツ印以外を消す
        loading.classList.add("loader");
        // ぐるぐる君を表示
        let timerId
        timerId = setTimeout(() => {
            loading.classList.remove("loader")
            clearTimeout(timerId);
        }, 3000);
        // 三秒で消える
        // finish__open.classList.add("open")
        setTimeout(function() {
            finish__open.classList.add("open")
        }, 3000);
        // 三秒たったら出す
    }, );
}



// スクロール禁止
document.getElementById('opened-log-and-submit').onclick = function() {
    // イベントと関数を紐付け
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.add('overflow-hidden');
}


// カレンダー？
// {
//     function showTime() {
//         const timeoutId = setTimeout(showTime, 3000);
//     }
//     showTime();
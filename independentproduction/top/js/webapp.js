"use strict"; {
    // モーダル部分の設定
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    // モーダルを開く

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        hide.classList.remove("hide")
        loading.classList.remove("loader")
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
    load.addEventListener("click", () => {
        hide.classList.add("hide");
        //バツ印以外を消す
        loading.classList.add("loader");
        // ぐるぐる君を表示


        // ↑と↓を合体させたい 割と後一歩

        setTimeout(function($) {
            $(".loader").fadeIn().queue(function() {
                setTimeout(function() {
                    $("loader").dequeue();
                }, 3000);
            });
            $(".loader").fadeOut();

        });










        // const timeout = setTimeout("loader", 4000);

        // setTimeout(function() {
        //     $("loader").dequeue(timeout);
        // }, 3000);
        // $("loader").fadeOut();
        // console.log(3)
        // console.log("loader")

        // "loader".style = display.none

        // $(document).ready(function() {

        //     $("loader").fadeIn().queue(function() {
        //         setTimeout(function() {
        //             $("loader").dequeue();
        //         }, 3000);
        //     });
        //     $("loader").fadeOut();
        //     console.log(2)
    });



}
// カレンダー？


// {

//     function showTime() {
//         const timeoutId = setTimeout(showTime, 3000);
//     }

//     showTime();
// }
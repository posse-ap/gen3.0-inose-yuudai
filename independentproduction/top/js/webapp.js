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

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        hide.classList.remove("hide")
    });

    mask.addEventListener('click', () => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
    });

    const hide = document.getElementById("modal-otherthan-close")
    const load = document.getElementById('opened-log-and-submit');
    load.addEventListener("click", () => {
            hide.classList.add("hide");
            hide.classList.add("loader")
        })
        // カレンダー？

}
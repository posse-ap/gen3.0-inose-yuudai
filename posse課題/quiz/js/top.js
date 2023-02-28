$(".hamburger").click(function() { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $(".hamburger-content").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

$(".hamburger-content a").click(function() { //ナビゲーションのリンクがクリックされたら
    $(".hamburger").removeClass('active'); //ボタンの activeクラスを除去し
    $(".hamburger-content").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});

$(
    function() {


    });
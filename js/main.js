
$(function () {

    //slick
    // $("セレクタ").slick({
    //     オプション名: 値,
    //     オプション名: 値,
    //   });

    //  $(".slide-img").slick({
    //    arrows: false,
    //  autoplay: true, // 自動再生
    //      autoplaySpeed: 3000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    //    infinite: true, // 無限スライド
    //  centerMode: false,// 前後スライドを部分表示
    //  centerPadding: '100px',// 両端の見切れるスライド幅
    //slidesToShow: 3, //スライド表示3つに設定

    // responsive: [
    //   {
    //   breakpoint: 845, // ブレイクポイントを指定
    // settings: {
    //   slidesToShow: 3,
    // centerPadding: "50px",
    //         },
    //   },
    // ],
    // });

    /*=================================================
 PICK UP スライダー
 ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/

    // $(document).ready(function(){
    //   $('.your-class').slick({
    //     setting-name: setting-value
    //   });
    // });



    $(".slick-img").slick({
        arrows: false,
        // arrows: false：矢印ナビゲーションを非表示
        // (dots: true,)
        // スライドショーにドットナビゲーション（現在のスライドを示すドット）が表
        centerMode: true,
        // // centerMode: true：現在のスライドを中央に配置
        centerPadding: "100px",
        // centerPadding: "100px"：中央に配置されたスライドの左右の余白を指定
        slidesToShow: 3,
        // // slidesToShow: 3：表示するスライドの数を指定します（1度に表示されるスライドの数）
        autoplay: true,
        // autoplay: true：自動再生を有効にします
        autoplaySpeed: 3000,
        // autoplaySpeed: 3000：自動再生の速度を指定します（ミリ秒単位）
        responsive: [
            {
                breakpoint: 845,
                settings: {
                    // ブレークポイント（デバイスの幅が768ピクセル以下の場合）では、
                    centerPadding: "100px",
                    slidesToShow: 3,
                    // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります
                },
            },
        ],
    });


    /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
    // スクロール時のイベント
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        // 画面がスクロールされた時に実行する
        $(".fadein").each(function () {
            // スクロールした距離
            // fadeinクラスに対して順に処理を行う
            // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる


            // スクロールした距離
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            // 現在のスクロール位置を取得する。
            // scrollTop()：要素のスクロール位置を取得

            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;

            // 画面の高さ
            let windowHeight = $(window).height();

            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 100) {
                // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });


    /*=================================================
    トップに戻る
    ===================================================*/
    let pagetop = $(".to-top");
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    pagetop.hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        // スクロール位置が700pxを超えた場合
        if ($(this).scrollTop() > 700) {
            // トップに戻るボタンを表示する
            pagetop.fadeIn();

            // スクロール位置が700px未満の場合
        } else {
            // トップに戻るボタンを非表示にする
            pagetop.fadeOut();
        }
    });

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
        // 0.5秒かけてページトップへ移動
        $("body,html").animate({ scrollTop: 0 }, 500);

        // イベントが親要素へ伝播しないための記述
        // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
        return false;
    });

    /*=================================================
ハンバーガーメニュー
===================================================*/
    // クリックしたら
    $(".toggle_btn").on("click", function () {
        $("header").toggleClass("open");
    });



    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

  

});

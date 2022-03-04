
// -----------------------JavaScript-----------------------------











// ----------------------------jQuery---------------------------------
$(function () {

    // -----------------------------------background画像のプラグイン--------------------------------------
    $(".bg-slider").bgSwitcher({
        images: ["./assets/img/waifu_choco2.png", "./assets/img/chocopie_one.png", "./assets/img/waifu_choco.png"],
        interval: 5000,
        loop: true,
        shuffle: true,
        effect: "drop",
        duration: 750,
        easing: "swing"
    });

    // -----------------------------スクロール時にフェードインさせたいアイテム-----------------------------

    $(window).on("scroll",function(){

        // ---現在地を取ってくる---
        let now = $(window).scrollTop();

        // ---これだと(.js-fadein)のクラスを持ってる一番上の要素に反応してしまう。---
        // ---↓↓このままだとスクロールした時に一番上の高さで反応してしまってそれぞれの高さでフェードインしない---
        // let item_h = $(".js-fadein").offset().top;

        // ---画面の高さを取ってくる---
        let windowheight = $(window).height();

        // ---(.js-fadein)のクラスを持っている要素全てを変数targetsに入れる---
        let targets = $(".js-fadein");

        // ---targetsに対してeach()を使ってindex(インデックス番号)とelement(HTML要素)を取得する---
        targets.each(function(index,element){

        // ---変数item_hに(.js-fadein)を含むそれぞれの高さを入れる---
        let item_h = $(element).offset().top;

        // now + windowheight で画面下の高さを取ってきて変数item_hが画面に出てきた時の条件をつける---
        if(now + windowheight > item_h){

            // (.js-fadein)にアニメーションの動きの(.fadein-item)をつける---
            $(".js-fadein").addClass("fadein-item");
        }
        })
    })

    // ---------------------------------------------------------------------------------------------

    // ----クリックのモーダルプラグイン----
    $(".shake").modaal({
        type: "image",
    });
    // -------------------------

    $(".toggle_btn").on("click",function(){
        if($("#header").hasClass("open")){
            $("#header").removeClass("open");
        }else{
            $("#header").addClass("open");
        }
    })

    $("#mask").on("click",function(){
        $("#header").removeClass("open");
    });

    $("#navi a").on("click",function(){
        $("#header").removeClass("open");
    })






    // let windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    // if(windowwidth > 768){
    //     let responsiveImage = [
    //         {src: "./assets/img/waifu_choco2.png"},
    //         {src: "./assets/img/chocopie_one.png"},
    //         {src: "./assets/img/waifu_choco.png"}
    //     ];
    // }

    // $("#slider").vegas({
    //     overlay: true,
    //     transition: "blur",
    //     transitionDuration: 2000,
    //     delay: 10000,
    //     animationDuration: 20000,
    //     animation: "kenburns",
    //     slodes: responsiveImage,
    // });

    // ------------------------------------------------------------------------------------------------


    // ---------------------1文字ずつ出てくるアニメーション-------------------------

    // ---アニメーションさせるクラス---
    let container = $(".bg-title");

    // ---アニメーションスピード---
    let speed = 300;

    // ---テキストの間にスペースを入れる---
    let content = container.html();
    let text = $.trim(content);
    let newHtml = "";

    // ---区切ったテキストを、テキストの数だけspanで囲む---
    text.split("").forEach(function(v) {
        newHtml += "<span>" + v + "</span>";
    });

    // ---spanで囲んだテキストをHTMLに戻す---
    container.html(newHtml);

    // ---1文字ずつ表示させる---
    let txtNum = 0;
    container.css({opacity: 1});
    setInterval(function(){
        container.find("span").eq(txtNum).css({opacity: 1});
        txtNum++
    },speed);

    // -------------------------------------------------------------------------

    





})
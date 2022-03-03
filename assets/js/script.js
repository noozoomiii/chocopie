
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
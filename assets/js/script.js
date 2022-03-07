
// -----------------------JavaScript-----------------------------











// --------------------------------------------------jQuery-------------------------------------------------------------
$(function () {

    // -----------------------------------background画像のプラグイン--------------------------------------
    $(".bg-slider").bgSwitcher({
        images: ["./assets/img/chocopie_one.png", "./assets/img/waifu_choco.png", "./assets/img/waifu_choco2.png"],
        interval: 6000,
        loop: true,
        shuffle: true,
        effect: "drop",
        duration: 750,
        easing: "swing"
    });
    // ------------------------------------------------------------------------------------------------



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
            // $(element)※それぞれの高さを取って※アニメーションの動きの(.fadein-item)をつける---
            $(element).addClass("fadein-item");
        }
        })
    })
    // ---------------------------------------------------------------------------------------------

    

    // ---------------------------トグルの動き------------------------------
    // ---何回押したかカウントする為箱を用意する---
    let count = 0;

    // ---クリックした時に1ずつ足していく---
    $(".toggle_btn").on("click",function(){
            count = count + 1;
            // ---奇数の時の処理---
            if(count % 2 == 1){
                $("#navi").removeClass("jump-up2");
                $("#navi").addClass("jump-up");
            // ---偶数の時の処理---
            }else{
                $("#navi").removeClass("jump-up");
                $("#navi").addClass("jump-up2");
            }
    })
    // -------------------------------------------------------------------



    // -------------------------トグルメニュー--------------------------------
    $(".toggle_btn").on("click",function(){

        // ---トグルをクリックした時に#headerが.openを持っていたら---
            // ---オープンを外す(閉じる)---    
        if($("#header").hasClass("open")){
            $("#header").removeClass("open");
            // ---オープンを付ける(開ける)---
        }else{
            $("#header").addClass("open");
        }
    })
    // --------------------------------------------------------------------



    // -------------------トグルのリンクを押したらトグルを閉める-----------------------
    $("#navi a").on("click",function(){
        $("#header").removeClass("open");
    });
    // --------------------------------------------------------------------------



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
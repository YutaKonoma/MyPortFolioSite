$(document).ready(function(){
    //デフォルトで表示する要素を指定
    $('.main-top').show();
    $('.main-top').hide();

    //buttonがクリックされたら処理を実行
    $('.button').click(function () {

         //toggleClassでshowのclassを追加または削除
        $('#app').toggleClass('show');

        //#appがshowのclassをを持っていれば
        if($('#app').hasClass('show')){

             //要素の表示を切り替える
            $('.main-top').hide();
            $('.element2').show();
        }else{

             //要素の表示を切り替える
            $('.element1').show();
            $('.element2').hide();
        }
    });
});

//sp時のasideー表示非表示ーーーーーーーーーーーーー
// let jsAside = document.getElementById('js-aside');
// let jsMv = document.getElementById('js-mv');
// let mv_h = jsMv.clientHeight;
 
// window.addEventListener('scroll', () => {
  // if (window.scrollY >= 80) {
    // fadeIn(jsAside, 500);
  // }else {
    // fadeOut(jsAside, 500);
  // }
// });

//アニメーションスクロール判定
let targets = document.querySelectorAll('.js-scrollAnimation');//アニメーションさせたい要素
let offset = 100;//アニメーションタイミング

window.addEventListener('scroll', function() {//スクロールしたとき

  var scroll = window.scrollY;//スクロール量を取得
  var h = window.innerHeight;//画面の高さを取得

  for(let target of targets) {
    var pos = target.getBoundingClientRect().top + scroll;//アニメーションさせたい要素の位置を取得
    if (scroll > pos - h + offset) {//スクロール量 > アニメーションさせたい要素の位置
      target.classList.add('is-animated');
    }
  }

});


jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var aside = $('#js-aside');
  aside.hide();

  // ボタンの表示設定
  
  if (window.matchMedia( "(max-width: 768px)" ).matches) {
    /* ウィンドウサイズが 768px以下の場合のコードをここに */
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        // 指定px以上のスクロールでボタンを表示
        aside.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        aside.fadeOut();
      }
    });
    } 
 
});

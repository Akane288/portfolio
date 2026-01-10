// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// 開閉ボタン
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});
// メニュー内リンククリックで閉じる
$('.hamburger-menu a').on('click', function () {
  hamburger.removeClass('hamburger-menu-active');
});
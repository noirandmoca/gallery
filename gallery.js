/**
 * ギャラリーを初期化する
 *
 * @param {HTMLElement} root ギャラリー全体のルート要素
 */
function initGallery (root) {
  // サムネイル画像
  const thumbnails = root.querySelectorAll('[data-gallery-image]');

  // メイン画像のIDをサムネイルから取得
  const targetIds = Array.prototype.map.call(thumbnails, tn => {
    return "#" + tn.getAttribute('data-gallery-image');
  });

  // メイン画像
  const mainImages = root.querySelectorAll(targetIds.join(','));

  // サムネイルのクリックイベントハンドラ
  function onClickThumbnail () {
    // まずメイン画像をすべて隠す
    mainImages.forEach(image => /* Insert code here... */);
    // 表示するメイン画像のIDを取得する
    const id = /* Insert code here... */;
    // 表示するメイン画像を取得する
    const target = /* Insert code here... */;
    // 要素があったら表示する
    /* Insert code here... */
  }
  
  thumbnails.forEach(tn => {
    tn.addEventListener('click', /* Insert code here... */);
  });
}

const elem = document.getElementById('myGallery');
initGallery(elem);

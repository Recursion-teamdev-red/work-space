import { getDomElements, hideResult } from './domUtils.js';

// おみくじをリセットする関数
export function resetOmikuji() {
  // DOM要素を取得
  const elements = getDomElements();

  // 結果を非表示にして初期状態に戻す
  hideResult(elements);
}

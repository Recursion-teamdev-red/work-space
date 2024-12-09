import { omikujiResults } from './omikujiData.js';
import { getDomElements, fillInResult, showResult } from './domUtils.js';

// おみくじを引く関数
export function drawOmikuji() {
  // ランダムな結果を取得
  const randomIndex = getRandomInt(omikujiResults.length);
  const omikujiResult = omikujiResults[randomIndex];

  // DOM要素を取得
  const elements = getDomElements();

  // 結果を要素に設定
  fillInResult(omikujiResult, elements);

  // 結果を表示
  showResult(elements);
}

// 0からmax未満のランダムな整数を取得する関数
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

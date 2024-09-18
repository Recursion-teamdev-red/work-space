import { omikujiResults } from './omikujiData.js';

export function drawOmikuji() {
  // ランダムな結果を取得
  const randomindex = getRandomInt(omikujiResults.length);
  const omikujiResult = omikujiResults[randomindex];

  // 結果を表示
  const fortuneEle = document.getElementById('fortune');
  const adviceEle = document.getElementById('advice');
  const imageEle = document.getElementById('omikuji-image');
  fillInResult(omikujiResult,fortuneEle,adviceEle,imageEle);
  
  // 結果表示エリアの表示
  // 案内画像とおみくじボタンを非表示にし、リセットボタンを表示
  const guideImage = document.getElementById('guide-image');
  const omikujiButton = document.getElementById('draw-button');
  const resetButton = document.getElementById('reset-button');
  showResult(fortuneEle,adviceEle,imageEle,guideImage,omikujiButton,resetButton);

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function fillInResult(omikujiResult,fortuneEle,adviceEle,imageEle) {
  fortuneEle.innerHTML = `運勢: ${omikujiResult.fortune}`;

  adviceEle.innerHTML = `
    <div>アドバイス: ${omikujiResult.advice}</div>
    <div>＊ラッキー言語＊: ${omikujiResult.language}</div>
    <div>＊ラッキーデータベース＊: ${omikujiResult.database}</div>
    <div>＊ラッキーエディタ＊: ${omikujiResult.editor}</div>
  `;

  imageEle.src = omikujiResult.image;
}

function showResult(fortuneEle,adviceEle,imageEle,guideImage,omikujiButton,resetButton) {
  fortuneEle.style.display = "block";
  adviceEle.style.display = "block";
  imageEle.style.display = "block";
  guideImage.style.display = "none";
  omikujiButton.style.display = "none";
  resetButton.style.display = "block";
}
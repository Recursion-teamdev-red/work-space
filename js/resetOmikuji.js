export function resetOmikuji() {
  // 結果表示エリアを非表示
  // 案内画像とおみくじボタンを再表示し、リセットボタンを非表示
  const fortuneEle = document.getElementById('fortune');
  const adviceEle = document.getElementById('advice');
  const imageEle = document.getElementById('omikuji-image');
  const guideImage = document.getElementById('guide-image');
  const omikujiButton = document.getElementById('draw-button');
  const resetButton = document.getElementById('reset-button');
  hideResult(fortuneEle,adviceEle,imageEle,guideImage,omikujiButton,resetButton);
}

function hideResult(fortuneEle,adviceEle,imageEle,guideImage,omikujiButton,resetButton) {
  fortuneEle.style.display = "none";
  adviceEle.style.display = "none";
  imageEle.style.display = "none";
  guideImage.style.display = "block";
  omikujiButton.style.display = "inline-block";
  resetButton.style.display = "none";
}
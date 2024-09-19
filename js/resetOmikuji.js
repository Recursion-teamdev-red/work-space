export function resetOmikuji() {
  // 結果表示エリアを非表示
  // 案内画像とおみくじボタンを再表示し、リセットボタンを非表示
  const omikujiAreaEle = document.getElementById('omikuji-container');
  const resultAreaEle = document.getElementById('result-container');
  const fortuneEle = document.getElementById('fortune');
  const adviceEle = document.getElementById('advice');
  const languageEle = document.getElementById('language');
  const databaseEle = document.getElementById('database');
  const editorEle = document.getElementById('editor');
  const imageEle = document.getElementById('omikuji-image');
  const guideImage = document.getElementById('guide-image');
  const omikujiButton = document.getElementById('draw-button');
  const resetButton = document.getElementById('reset-button');
  hideResult(
    omikujiAreaEle,
    resultAreaEle,
    fortuneEle,
    adviceEle,
    languageEle,
    databaseEle,
    editorEle,
    imageEle,
    guideImage,
    omikujiButton,
    resetButton
  );
}

function hideResult(
  omikujiAreaEle,
  resultAreaEle,
  fortuneEle,
  adviceEle,
  languageEle,
  databaseEle,
  editorEle,
  imageEle,
  guideImage,
  omikujiButton,
  resetButton
) {
  omikujiAreaEle.style.display = 'none';
  resultAreaEle.style.display = 'none';
  fortuneEle.style.display = 'none';
  adviceEle.style.display = 'none';
  languageEle.style.display = 'none';
  databaseEle.style.display = 'none';
  editorEle.style.display = 'none';
  imageEle.style.display = 'none';
  guideImage.style.display = 'block';
  omikujiButton.style.display = 'inline-block';
  resetButton.style.display = 'none';
}

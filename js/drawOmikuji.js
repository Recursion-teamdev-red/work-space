import { omikujiResults } from './omikujiData.js';

export function drawOmikuji() {
  // ランダムな結果を取得
  const randomindex = getRandomInt(omikujiResults.length);
  const omikujiResult = omikujiResults[randomindex];

  // 結果を表示
  const omikujiAreaEle = document.getElementById('omikuji-container');
  const resultAreaEle = document.getElementById('result-container');
  const fortuneEle = document.getElementById('fortune');
  const adviceEle = document.getElementById('advice');
  const languageEle = document.getElementById('language');
  const databaseEle = document.getElementById('database');
  const editorEle = document.getElementById('editor');
  const imageEle = document.getElementById('omikuji-image');
  fillInResult(omikujiResult, fortuneEle, adviceEle, languageEle, databaseEle, editorEle, imageEle);

  const title = document.getElementById('title');
  const guideImage = document.getElementById('guide-image');
  const omikujiButton = document.getElementById('draw-button');
  const resetButton = document.getElementById('reset-button');
  showResult(
    title,
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function fillInResult(omikujiResult, fortuneEle, adviceEle, languageEle, databaseEle, editorEle, imageEle) {
  fortuneEle.innerHTML = `${omikujiResult.fortune}`;
  adviceEle.innerHTML = `${omikujiResult.advice}`;
  languageEle.innerHTML = `${omikujiResult.language}`;
  databaseEle.innerHTML = `${omikujiResult.database}`;
  editorEle.innerHTML = `${omikujiResult.editor}`;

  imageEle.src = omikujiResult.image;
}

function showResult(
  title,
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
  omikujiAreaEle.style.display = 'block';
  resultAreaEle.style.display = 'block';
  fortuneEle.style.display = 'block';
  adviceEle.style.display = 'block';
  languageEle.style.display = 'block';
  databaseEle.style.display = 'block';
  editorEle.style.display = 'block';
  imageEle.style.display = 'inline-block';
  title.style.display = 'none';
  guideImage.style.display = 'none';
  omikujiButton.style.display = 'none';
  resetButton.style.display = 'block';
}

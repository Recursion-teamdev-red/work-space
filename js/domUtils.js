// DOM要素を取得して返す関数
export function getDomElements() {
  return {
    omikujiArea: document.getElementById('omikuji-container'),
    resultArea: document.getElementById('result-container'),
    fortune: document.getElementById('fortune'),
    advice: document.getElementById('advice'),
    language: document.getElementById('language'),
    database: document.getElementById('database'),
    editor: document.getElementById('editor'),
    image: document.getElementById('omikuji-image'),
    title: document.getElementById('title'),
    guideImage: document.getElementById('guide-image'),
    omikujiButton: document.getElementById('draw-button'),
    resetButton: document.getElementById('reset-button'),
  };
}

// 結果を表示する関数
export function showResult(elements) {
  elements.omikujiArea.style.display = 'block';
  elements.resultArea.style.display = 'block';
  elements.fortune.style.display = 'block';
  elements.advice.style.display = 'block';
  elements.language.style.display = 'block';
  elements.database.style.display = 'block';
  elements.editor.style.display = 'block';
  elements.image.style.display = 'inline-block';
  elements.title.style.display = 'none';
  elements.guideImage.style.display = 'none';
  elements.omikujiButton.style.display = 'none';
  elements.resetButton.style.display = 'block';
}

// 結果を非表示にする関数
export function hideResult(elements) {
  elements.omikujiArea.style.display = 'none';
  elements.resultArea.style.display = 'none';
  elements.fortune.style.display = 'none';
  elements.advice.style.display = 'none';
  elements.language.style.display = 'none';
  elements.database.style.display = 'none';
  elements.editor.style.display = 'none';
  elements.image.style.display = 'none';
  elements.guideImage.style.display = 'block';
  elements.omikujiButton.style.display = 'inline-block';
  elements.resetButton.style.display = 'none';
}

// 結果をDOM要素に設定する関数
export function fillInResult(omikujiResult, elements) {
  elements.fortune.innerHTML = `${omikujiResult.fortune}`;
  elements.advice.innerHTML = `${omikujiResult.advice}`;
  elements.language.innerHTML = `${omikujiResult.language}`;
  elements.database.innerHTML = `${omikujiResult.database}`;
  elements.editor.innerHTML = `${omikujiResult.editor}`;

  elements.image.src = omikujiResult.image;
}

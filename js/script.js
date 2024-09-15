import { omikujiResults } from './omikujiData.js';
import { drawOmikuji } from './drawOmikuji.js';
import { resetOmikuji } from './resetOmikuji.js';

// drawOmikuji関数をボタンにバインド
document.getElementById('draw-button').addEventListener('click', drawOmikuji);

// resetOmikuji関数をボタンにバインド
document.getElementById('reset-button').addEventListener('click', resetOmikuji);

import { ROWS } from './const.js';
import { flipColorsAnimation } from './flipColorsAnimation.js';
import { displayMessage } from './displayMessage.js';
import { wordle } from './getWordle.js';

export let row = 0;
let tile = 0;
export let gameOver = false;

export const addLetter = (key: string): void => {
  if (row < 7 && tile < 6) {
    const currentTile = document.getElementById(`row-${row}-tile-${tile}`);
    if (currentTile != null) {
      currentTile.textContent = key;
      currentTile.setAttribute('data', key);
      ROWS[row][tile] = key;
      tile++;
    }
  }
};

export const deleteLetter = (): void => {
  if (tile > 0) {
    tile--;
    const currentTile = document.getElementById(`row-${row}-tile-${tile}`);
    if (currentTile != null) {
      currentTile.textContent = '';
      currentTile.setAttribute('data', '');
      ROWS[row][tile] = '';
    }
  }
};

export const checkWordle = (): void => {
  if (tile > 5) {
    const userWordle: string = ROWS[row].join('');
    flipColorsAnimation();
    console.log(`User word is ${userWordle} and the correct word is ${wordle}`);
    if (userWordle === wordle) {
      displayMessage('Correct!');
      gameOver = true;
      return;
    } else {
      if (row >= 6) {
        displayMessage('Game Over');
        gameOver = true;
        return;
      }
      if (row < 6) {
        row++;
        tile = 0;
      }
    }
  }
};
import { KEYS, ROWS, FIELD, KEYBOARD } from './const.js';
import { addLetter, deleteLetter, checkWordle } from './letterOperations.js';
import { gameOver } from './letterOperations.js';
import { getWordle } from './getWordle.js';

getWordle();

ROWS.forEach((row: string[], rowIndex: number) => {
  const rowElement = document.createElement('div');
  rowElement.setAttribute('id', `row-${rowIndex}`);
  row.forEach((tile: string, tileIndex: number) => {
    const tileElement = document.createElement('div');
    tileElement.setAttribute('id', `row-${rowIndex}-tile-${tileIndex}`);
    tileElement.classList.add('game-container__tile');
    rowElement.append(tileElement);
  });
  if (FIELD != null) {
    FIELD.append(rowElement);
  }
});

KEYS.forEach((key: string) => {
  const button = document.createElement('button');
  button.textContent = key;
  button.setAttribute('id', key);
  button.addEventListener('click', (): void => handleClick(key));
  if (KEYBOARD != null) {
    KEYBOARD.append(button);
  }
});

const handleClick = (key: string): void => {
  if (!gameOver) {
    if (key === 'DELETE') {
      deleteLetter();
      return;
    }
    if (key === 'ENTER') {
      checkWordle();
      return;
    }
    addLetter(key);
  }
};
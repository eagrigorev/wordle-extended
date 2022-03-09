import { KEYS, ROWS, WORDLE, field, keyboard } from './const.js';
import { Letter } from './types.js';
import { keyboardColors } from './keyboardColors.js';
import { displayMessage } from './displayMessage.js';

let row = 0;
let tile = 0;
let gameOver = false;

ROWS.forEach((row: string[], rowIndex: number) => {
  const rowElement = document.createElement('div');
  rowElement.setAttribute('id', `row-${rowIndex}`);
  row.forEach((tile: string, tileIndex: number) => {
    const tileElement = document.createElement('div');
    tileElement.setAttribute('id', `row-${rowIndex}-tile-${tileIndex}`);
    tileElement.classList.add('game-container__tile');
    rowElement.append(tileElement);
  });
  if (field != null) {
    field.append(rowElement);
  }
});

KEYS.forEach((key: string) => {
  const button = document.createElement('button');
  button.textContent = key;
  button.setAttribute('id', key);
  button.addEventListener('click', (): void => handleClick(key));
  if (keyboard != null) {
    keyboard.append(button);
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

const addLetter = (key: string): void => {
  if (row < 7 && tile < 6) {
    const currentTile = document.getElementById(`row-${row}-tile-${tile}`);
    if (currentTile != null) {
      currentTile.textContent = key;
      currentTile.setAttribute('data', key);
      ROWS[row][tile] = key;
      tile++;
      console.log(ROWS);
    }
  }
};

const deleteLetter = (): void => {
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

const checkWordle = (): void => {
  if (tile > 5) {
    const userWordle: string = ROWS[row].join('');
    flipColorsAnimation();
    console.log(`User word is ${userWordle} and the correct word is ${WORDLE}`);
    if (userWordle === WORDLE) {
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

const flipColorsAnimation = (): void => {
  const parentRow = document.querySelector(`#row-${row}`);
  let wordleCheck = WORDLE;
  const userWordle: Letter[] = [];
  if (parentRow != null) {
    const tiles = Object.values(parentRow.childNodes) as HTMLElement[];
    tiles.forEach((tile: HTMLElement, index: number) => {
      const tileData = tile.getAttribute('data');
      if (tileData != null) {
        userWordle.push(
          {
            key: tileData,
            color: 'color_grey'
          }
        );
        userWordle.forEach((letter: Letter, index: number) => {
          if (letter.key == WORDLE[index]) {
            letter.color = 'color_green';
            wordleCheck = wordleCheck.replace(letter.key, '');
          }
        });
        userWordle.forEach((letter) => {
          if (wordleCheck.includes(letter.key)) {
            letter.color = 'color_yellow';
            wordleCheck = wordleCheck.replace(letter.key, '');
          }
        }); 
        setTimeout((): void => {
          tile.classList.add('game-container__tile_flip-animation');
          tile.classList.add(userWordle[index].color);
          keyboardColors(userWordle[index].key, userWordle[index].color);
        }, 300 * index);
      }
    });
  }
};
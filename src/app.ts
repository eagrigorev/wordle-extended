import { KEYS, ROWS, WORDLE } from './const.js';

const field = document.querySelector('.game-container__field');
const keyboard = document.querySelector('.game-container__keyboard');
const message = document.querySelector('.game-container__message');

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
  console.log(`Clicked ${key}`);
  if (key === 'DELETE') {
    deleteLetter();
    return;
  }
  if (key === 'ENTER') {
    checkWordle();
    return;
  }
  addLetter(key);
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

const displayMessage = (msg: string): void => {
  const messageBody = document.createElement('p');
  messageBody.textContent = msg;
  if (message != null) {
    message.append(messageBody);
    setTimeout((): void => {
      message.removeChild(messageBody);
    }, 3000);
  }
};

const flipColorsAnimation = (): void => {
  const parentRow = document.querySelector(`#row-${row}`);
  if (parentRow != null) {
    const tiles = Object.values(parentRow.childNodes) as HTMLElement[];
    tiles.forEach((tile, index: number) => {
      const tileData = tile.getAttribute('data');
      if (tileData == WORDLE[index]) {
        tile.classList.remove('game-container__tile');
        tile.classList.add('game-container__tile_green');
      } else {
        if (WORDLE.includes(tileData)) {
          tile.classList.remove('game-container__tile');
          tile.classList.add('game-container__tile_yellow');
        } else {
          tile.classList.remove('game-container__tile');
          tile.classList.add('game-container__tile_grey');
        }
      }
    });
  }
};
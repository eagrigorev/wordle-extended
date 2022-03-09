import { Letter } from './types.js';
import { WORDLE } from './const.js';
import { keyboardColors } from './keyboardColors.js';
import { row } from './letterOperations.js';

export const flipColorsAnimation = (): void => {
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
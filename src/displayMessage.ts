import { MESSAGE } from './const.js';

export const displayMessage = (msg: string): void => {
  const messageBody = document.createElement('p');
  messageBody.textContent = msg;
  if (MESSAGE != null) {
    MESSAGE.append(messageBody);
    setTimeout((): void => {
      MESSAGE.removeChild(messageBody);
    }, 3000);
  }
};
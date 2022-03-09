export const keyboardColors = (
  key: string,
  color: string
): void => {
  const keyChild = document.getElementById(key);
  if (keyChild != null) {
    keyChild.classList.add(color);
  }
};
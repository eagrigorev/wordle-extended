export let wordle = '';

export const getWordle = (): void => {
  fetch('http://localhost:8000/words')
    .then(response => response.json())
    .then((json: string) => {
      wordle = json.toUpperCase();
    })
    .catch(error => console.log(error));
};
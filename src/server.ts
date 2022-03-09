/* eslint @typescript-eslint/no-var-requires: "off" */

const axios = require('axios').default;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 8000;
require('dotenv').config();

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/words', (req: Express.Request, res: Express.Response) => {
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: { count: '5', wordLength: '6' },
    headers: {
      'x-rapidapi-host': 'random-words5.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY
    }
  };

  

  axios.request(options)
    .then((response) => {
      console.log(response.data);
      res.json(response.data[0]);
    })
    .catch((error: string) => {
      console.error(error);
    });
});

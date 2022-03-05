/* eslint @typescript-eslint/no-var-requires: "off" */

const axios = require('axios').default
const express = require('express')
const app = express()
const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/words', (req: Express.Request, res: Express.Response) => {
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: {count: '5', wordLength: '6'},
    headers: {
      'x-rapidapi-host': 'random-words5.p.rapidapi.com',
      'x-rapidapi-key': '1cbe8f940amsh1b76597c778220ap105fb0jsn9f6628004f11'
    }
  };

  axios.request(options)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error: string) => {
      console.error(error)
    })
})

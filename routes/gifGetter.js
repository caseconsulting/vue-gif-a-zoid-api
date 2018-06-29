let express = require('express');
let router = express.Router();
let _ = require('lodash');
let axios = require('axios');
let env = require('dotenv').config();

const apiKey= `${process.env.GIF_AUTH}`;

router.get('/:search', (req, res, next) => {
  let randomEndPoint = 'https://api.giphy.com/v1/gifs/random';
  let url = `${randomEndPoint}?api_key=${apiKey}`;

  axios.get(url)
    .then((response) => {
      console.log(response.data.data.images.original.url);
      res.send(response.data.data.images.original.url);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

router.get('/search', (req, res, next) => {
  let searchEndPoint = 'https://api.giphy.com/v1/gifs/search';
  let url = `${searchEndPoint}?api_key=${apiKey}`;

  axios.get(url)
    .then((response) => {
      console.log(response.data.data.images.original.url);
      res.send(response.data.data.images.original.url);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});


module.exports = router;

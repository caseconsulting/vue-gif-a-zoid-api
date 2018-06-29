var express = require('express');
var router = express.Router();
var _ = require('lodash');
var axios = require('axios');
var env = require('dotenv').config();

router.get('/', (req, res, next) => {
  let apiKey= `${process.env.GIF_AUTH}`;
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


module.exports = router;

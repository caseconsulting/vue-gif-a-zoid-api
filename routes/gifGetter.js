var express = require('express');
var router = express.Router();
var _ = require('lodash');
var axios = require('axios');
var env = require('dotenv').config();

let apiKey= `${process.env.GIF_AUTH}`;
let randomEndPoint = 'https://api.giphy.com/v1/gifs/random';

let url = `${randomEndPoint}?api_key=${apiKey}`;

axios.get(url)
  .then(function (response) {

    console.log(response.data.data.images.original.url);
  })
  .catch(function (error) {
    console.log(error);
  });



router.get('/', (req, res, next) => {

});


module.exports = router;

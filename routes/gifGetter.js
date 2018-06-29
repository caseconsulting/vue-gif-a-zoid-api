let express = require('express');
let router = express.Router();
let _ = require('lodash');
let axios = require('axios');
let env = require('dotenv').config();

const apiKey= `${process.env.GIF_AUTH}`;

router.get('/', (req, res, next) => {
  let randomEndPoint = 'https://api.giphy.com/v1/gifs/random';
  let url = `${randomEndPoint}?api_key=${apiKey}&rating=pg-13`;

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

router.get('/:search', (req, res, next) => {
  let searchEndPoint = 'https://api.giphy.com/v1/gifs/search';
  let searchTerm = `${req.params.search}`;

  let url = `${searchEndPoint}?api_key=${apiKey}&q=${searchTerm}&limit=500&rating=pg-13`;

  axios.get(url)
    .then((response) => {
      let searchReturn = [];
      for(i = 0; i < 5; i++)
      {
        let random = Math.floor((Math.random() * (response.data.data.length-0) + 0));
        console.log(random);
        searchReturn.push(response.data.data[random].images.original.url);
      }
      console.log(searchReturn);
      res.send(searchReturn);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});


module.exports = router;

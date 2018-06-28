var express = require('express');
var router = express.Router();
var _ = require('lodash');
var axios = require('axios');
var scheduler = require('node-scheduler');

var oneMinute = scheduler.scheduleJob('1****', getTrending())

var GphApiClient = require('giphy-js-sdk-core')
client = GphApiClient()

function getTrending(){
  client.random('gifs', {'rating': 'pg-13'})
    .then((response) => {
      var gif = response.data.images.original.gif_url;
      console.log(gif);
      //return gif;
    })
    .catch((err) => {
      console.log(err);
      //return err;
    })
}


router.get('/', (req, res, next) => {
  getTrending();
});


module.exports = router;

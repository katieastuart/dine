const db = require("../models");
const axios = require("axios");
const routes = require("../routes");

// Defining methods for the booksController
module.exports = {
  google: function(req, res) {
    axios({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${
        req.body.searchSelection.category
      }&opennow&minprice=${req.body.minPrice}&maxprice=${
        req.body.maxPrice
      }&location=${req.body.latitude},${req.body.longitude}&radius=${
        req.body.distance
      }&key=`
    }).then(function(response) {
      res.json(response.data.results);
    });
  }
};

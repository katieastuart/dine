const db = require("../models");
const axios = require("axios");
const routes = require("../routes");

// Defining methods for the booksController
module.exports = {
  google: function(req, res) {
    console.log("did this get hit");
    console.log(req.body);
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
      console.log(response.data.results);
    });
  }
  // ,
  // addRestaurants: function(req,res) {
  //   axios({
  //     method: "POST",
  //     url: "/api/restaurants",
  //     data: {
  //       type: typeOfFoodToSearch,
  //       name: results[i].name,
  //       address: results[i].formatted_address,
  //       placeId: results[i].place_id
  //   }
  //   })
  // }
};
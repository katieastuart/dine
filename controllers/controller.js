const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  google: function (req, res) {
    axios({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${
        req.body.searchSelection.category
        }&opennow&minprice=${req.body.minPrice}&maxprice=${
        req.body.maxPrice
        }&location=${req.body.latitude},${req.body.longitude}&radius=${
        req.body.distance
        }&key=AIzaSyAN-Maosba3R24Xqxv3aT-ZHcZ16dbzbdA`
    }).then(function (response) {
      res.json({
        response: response.data.results,
        type: req.body.searchSelection.name
      });
    });
  }
};

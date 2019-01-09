const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  google: function(req, res) {
    axios({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.body.searchSelection.category}&opennow&minprice=${req.body.minPrice}&maxprice=${req.body.maxPrice}&location=${req.body.latitude},${req.body.longitude}&radius=${req.body.distance}&key=AIzaSyAN-Maosba3R24Xqxv3aT-ZHcZ16dbzbdA`
    }).then(function (response) {
      res.json(response.data.results)
    })
  }
};
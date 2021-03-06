var db = require("../models");

module.exports = {
  addRestaurant: function (req, res) {
    res.send(200);
    db.Restaurants.findAll({
      where: {
        restaurant_place_id: req.body.placeId
      }
    }).then(function (dbRes) {
      if (dbRes.length) {
        db.Last_Search.create({
          user_id: req.session.user.id,
          restaurant_id: dbRes[0].dataValues.id
        })
      }
      else {
        db.Restaurants.create({
          restaurant_name: req.body.name,
          restaurant_type: req.body.type,
          restaurant_address: req.body.address,
          restaurant_place_id: req.body.placeId,
          restaurant_rating: req.body.rating,
          restaurant_price_level: req.body.priceLevel,
          restaurant_photo_reference: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + req.body.photoReference + "&key=AIzaSyAN-Maosba3R24Xqxv3aT-ZHcZ16dbzbdA"
        }).then(function (dbRes) {
          db.Last_Search.create({
            user_id: req.session.user.id,
            restaurant_id: dbRes.dataValues.id
          }).then(function (res) {
            res.json(200);
          })
        });
      }
    })
  }
}

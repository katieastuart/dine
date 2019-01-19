var db = require("../models");

module.exports = {
  //select all favorites for a user
  findAll: function(req, res) {
    db.Users.findAll({
      include: [
        {
          model: db.Restaurants,
          as: "user_favorite"
        }
      ],
      where: {
        id: req.session.user.id
      }
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  },
  //select distinct food types
  findFavoriteTypes: function(req, res) {
  db.sequelize
    .query(
      "select restaurant_type from favorites f join Restaurants r on f.restaurantid = r.id where userid = " + req.session.user.id + " group by userid,restaurant_type order by 1")
      .spread((results, metadata) => {
        console.log(results)
        res.json(results)

      })
  },
  //select all favorites for a user by type
  findAllType: function(req, res) {
    db.Users.findAll({
      include: [
        {
          model: db.Restaurants,
          as: "user_favorite",
          where: {
            restaurant_type: req.params.type
          }
        }
      ],
      where: {
        id: req.session.user.id
      }
    }).then(function(dbRes) {
      res.json(dbRes);
    });
  },
  //add new favorite
  addFavorite: function(req, res) {
    console.log(req.session.user.id);
    console.log(req.body.id);
    
    db.Restaurants.findAll({
      where: {
        id: req.body.id
      }
    }).then(function(dbRes) {
      console.log(dbRes[0].dataValues.id);
      db.Favorites.create({
          user_id: req.session.user.id,
          UserId: req.session.user.id,
          restaurant_id: dbRes[0].dataValues.id,
          RestaurantId: dbRes[0].dataValues.id
        }).then(dbres => res.json(dbres))

      console.log(req.session.user.id);
      console.log(dbRes[0].dataValues.id);
    });
  },
  //delete a favorite for a user
  deleteFavorite: function(req, res) {
    db.Favorites.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRes) {
      res.json(dbRes);
    });
  }
}


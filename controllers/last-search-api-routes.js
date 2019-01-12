var db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Users.findAll({
      include: [
        {
          model: db.Restaurants,
          as: "user_restaurant"
        }
      ],
      where: {
        id: req.session.user.id
      }
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  },
  deleteLastSearch: function(req, res) {
    db.Last_Search.destroy({
      where: {
        user_id: req.session.user.id
      }
    }).then(function() {
      res.send(202);
    });
  }
}



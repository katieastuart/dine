const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurants-api-routes");


// add a new restaurant
router.route("/")
    .post(restaurantsController.addRestaurant)


module.exports = router;

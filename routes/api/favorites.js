const router = require("express").Router();
const favoritesController = require("../../controllers/favorites-api-routes");


router.route("/")
.post(favoritesController.addFavorite)

//select all favorites for a user
router.route("/:id")
    .get(favoritesController.findAll)

//select all favorites for a user by type
router.route("/:type/:id")
    .get(favoritesController.findAllType)

//add new favorite
router.route("/restaurants/:id")
    .post(favoritesController.addFavorite)

//delete a favorite for a user
router.route("/:id")
    .delete(favoritesController.deleteFavorite)

module.exports = router;

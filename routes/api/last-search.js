const router = require("express").Router();
const lastSearchController = require("../../controllers/last-search-api-routes");


router.route("/")
    .get(lastSearchController.findAll)

//select all search results for a user
//delete last search for a user
router.route("/:id")
    .delete(lastSearchController.deleteLastSearch)

module.exports = router;

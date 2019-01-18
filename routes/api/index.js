const router = require("express").Router();
const searchRoutes = require("./search");
const favortiesRoutes = require("./favorites");
const restaurantsRoutes = require("./restaurants");
const lastSearchRoutes = require("./last-search");
const userAuth = require('./userAuth')

//  /api/search
router.use("/search", searchRoutes);
//  /api/favorites
router.use("/favorites", favortiesRoutes);
//  /api/restaurant
router.use("/restaurant", restaurantsRoutes);
//  /api/last-search
router.use("/last-search", lastSearchRoutes);
//  /api/user
router.use("/users", userAuth)

module.exports = router;

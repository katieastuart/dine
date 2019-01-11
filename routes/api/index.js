const router = require("express").Router();
const searchRoutes = require("./search");
const userAuth = require('./userAuth')

// Book routes

//  /api/search
router.use("/search", searchRoutes);
//  /api/user
router.use("/users", userAuth)

module.exports = router;

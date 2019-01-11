const router = require("express").Router();
const userAuthCtrl = require("../../controllers/user-api-routes");

// Matches with "/api/users/"
router.route("/")
  .get(userAuthCtrl.getAllUsers) //sends passwords
  .post(userAuthCtrl.createNewUser)

router.route("/:id")
  .delete(userAuthCtrl.deleteUser)

router.route("/logout")
  .get(userAuthCtrl.logout)

router.route("/login")
  .post(userAuthCtrl.login)

router.route("/profile/:email")
  // .get(userAuthCtrl.getUserByEmail) //NOTE: infinite loop????????
  // .put(userAuthCtrl.updateUserByEmail) //NOTE: needs work

router.route("/session")
  .get(userAuthCtrl.session)

module.exports = router;
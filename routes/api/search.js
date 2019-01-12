const router = require("express").Router();
const Controller = require("../../controllers/controller.js");

router.route("/google")
  .post(Controller.google)
  
module.exports = router;

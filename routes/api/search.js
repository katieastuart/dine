const router = require("express").Router();
const Controller = require("../../controllers/controller.js");

// Matches with "/api/books"
router.route("/")
  // .get(booksController.findAll)
  // .post(booksController.create);

router.route("/google")
  .post(Controller.google)
  
// Matches with "/api/books/:id"
router
  // .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);


module.exports = router;

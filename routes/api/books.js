const router = require("express").Router();
const heroesController = require("../../controllers/heroesController");

// Matches with "/api/heroes"
router.route("/")
  .get(heroesController.findAll)
  .post(heroesController.create);

// Matches with "/api/heroes/:id"
router
  .route("/:id")
  .get(heroesController.findById)
  .put(heroesController.update)
  .delete(heroesController.remove);

module.exports = router;

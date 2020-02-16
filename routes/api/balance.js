const router = require("express").Router();
const balanceController = require("../../controllers/balanceController");

// Matches with "/api/balance"
router
  .route("/")
  .get(balanceController.findAll)
  .post(balanceController.create);

// Matches with "/api/balance/:id"
router
  .route("/:id")
  .get(balanceController.findById)
  .put(balanceController.update)
  .delete(balanceController.remove);

module.exports = router;

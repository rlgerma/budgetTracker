const router = require("express").Router();
const balanceController = require("../../controllers/balanceController");

router
  .route("/")
  .get(balanceController.findAll)
  .post(balanceController.create);

module.exports = router;

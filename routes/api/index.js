const router = require("express").Router();
const balanceRoutes = require("./balance");

// balance routes
router.use("/balance", balanceRoutes);

module.exports = router;

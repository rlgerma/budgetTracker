const router = require("express").Router();
const balanceRoutes = require("./balance");

router.use("/balance", balanceRoutes);

module.exports = router;

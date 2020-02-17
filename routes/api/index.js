const router = require("express").Router();
const withdrawRoutes = require("./withdraw");
const depositRoutes = require("./deposit")

router.use("/Withdraw", withdrawRoutes);
router.use("/Deposit", depositRoutes)

module.exports = router;

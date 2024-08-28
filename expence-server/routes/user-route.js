const { Router } = require("express");

const router = Router();
// router.get();
router.route("/").get().post();
module.exports = router;

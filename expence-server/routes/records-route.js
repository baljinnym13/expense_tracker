const { Router } = require("express");

const {
  updateRecords,
  getAllRecords,
  createRecords,
  deleteRecords,
  getUserRecords,
} = require("../controllers/Records-controller");

const router = Router();

router.route("/").get(getAllRecords).post(createRecords);
router.route("/:id").get(getUserRecords);

router.route("/:id").put(updateRecords).delete(deleteRecords);

module.exports = router;

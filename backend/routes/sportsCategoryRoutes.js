const express = require("express");
const {
    registerSportsCategory,
    allSportsCategory,
    UpdateSportsCategory,
} = require("../controllers/sportsCategoryControllers");

const router = express.Router();

router.route("/").post(registerSportsCategory);
router.route("/").get(allSportsCategory);
router.post("/:id", UpdateSportsCategory);

module.exports = router;
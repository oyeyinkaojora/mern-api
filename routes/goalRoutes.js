var express = require("express");
var router = express.Router();
const {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals, 
} = require('../controller/goalController')

router.get("/", getGoals);

router.post("/", setGoals);

router.put("/:id", updateGoals);

router.delete("/:id",deleteGoals);

module.exports = router;

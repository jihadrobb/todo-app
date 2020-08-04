const router = require("express").Router();
const Controller = require("../controllers/todoController");

router.post("/", Controller.add);
router.get("/", Controller.showAll);
router.get("/:id", Controller.showOne);
router.put("/:id", Controller.edit);
router.delete("/:id", Controller.delete);

module.exports = router;

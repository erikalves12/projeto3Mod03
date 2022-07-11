const router = require("express").Router();
const userController = require("./user.controller");

router.post("/", userController.createUserController);
router.get("/", userController.findAllUserControler);
router.get("/:id", userController.findAllByidUserControler);
router.put("/", userController.updateController);
router.delete("/", userController.deleteController);

module.exports = router;

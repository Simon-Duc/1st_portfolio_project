const express = require("express");

const { ProjectController } = require("./controllers");

const router = express.Router();

router.get("/projects", ProjectController.browse);
router.get("/projects/:id", ProjectController.read);
router.put("/projects/:id", ProjectController.edit);
router.post("/projects", ProjectController.add);
router.delete("/projects/:id", ProjectController.delete);

module.exports = router;

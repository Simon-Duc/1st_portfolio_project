const express = require("express");

const { ProjectController } = require("./controllers");
const { ClientController } = require("./controllers");

const router = express.Router();

router.get("/projects", ProjectController.browse);
router.get("/projects/:id", ProjectController.read);
router.put("/projects/:id", ProjectController.edit);
router.post("/projects", ProjectController.add);
router.delete("/projects/:id", ProjectController.delete);

router.get("/clients", ClientController.browse);
router.get("/clients/:id", ClientController.read);
router.put("/clients/:id", ClientController.edit);
router.post("/clients", ClientController.add);
router.delete("/clients/:id", ClientController.delete);

module.exports = router;

const express = require("express");

const { ProjectController } = require("./controllers");
const { ClientController } = require("./controllers");
const { ToolController } = require("./controllers");
const { ProjectToolController } = require("./controllers");

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

router.get("/tools", ToolController.browse);
router.get("/tools/:id", ToolController.read);
router.put("/tools/:id", ToolController.edit);
router.post("/tools", ToolController.add);
router.delete("/tools/:id", ToolController.delete);

router.get("/project_tools", ProjectToolController.browse);
router.get("/project_tools/:id", ProjectToolController.read);
router.post("/project_tools", ProjectToolController.add);
router.delete(
  "/projects/:project_id/tools/:tool_id",
  ProjectToolController.delete
);

module.exports = router;

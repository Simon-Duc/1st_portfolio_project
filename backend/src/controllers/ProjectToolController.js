const models = require("../models");

class ProjectToolController {
  static browse = (req, res) => {
    models.project_tool
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static readByProjectId = (req, res) => {
    const { id } = req.params;
    models.project_tool
      .findByProjectId(id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static readByToolId = (req, res) => {
    const { id } = req.params;
    models.project_tool
      .findByToolId(id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const projectTool = req.body;

    // TODO validations (length, format...)

    models.project_tool
      .insert(projectTool)
      .then(() => {
        res.status(201).send({ ...projectTool });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.project_tool
      .delete(req.params.project_id, req.params.tool_id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectToolController;

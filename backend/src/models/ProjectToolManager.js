const AbstractManager = require("./AbstractManager");

class ProjectToolManager extends AbstractManager {
  static table = "project_tool";

  findAll() {
    return this.connection.query(`select * from  ${ProjectToolManager.table}`);
  }

  findByProjectId(projectId) {
    return this.connection.query(
      `select distinct tool_id, tool.name, tool.img_url, tool.category from tool inner join project_tool on tool.id = tool_id inner join project on project.id = project_id where project_id = ?`,
      [projectId]
    );
  }

  findByToolId(toolId) {
    return this.connection.query(
      `select distinct project_id, project.name, project.description, project.start_date, project.end_date, project.img_url, project.developer_team, project.linkedin_post_link, project.github_repo_link, project.client_id from project inner join project_tool on project.id = project_id inner join tool on tool.id = tool_id where tool_id = ?`,
      [toolId]
    );
  }

  delete(toolId, projectId) {
    return this.connection.query(
      `delete from ${ProjectToolManager.table} where tool_id = ? and project_id = ?`,
      [toolId, projectId]
    );
  }

  insert(projectTool) {
    return this.connection.query(
      `insert into ${ProjectToolManager.table} (tool_id, project_id) values (?, ?)`,
      [projectTool.tool_id, projectTool.project_id]
    );
  }
}

module.exports = ProjectToolManager;

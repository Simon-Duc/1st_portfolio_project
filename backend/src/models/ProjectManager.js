const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name, description, start_date, end_date, img_url, developer_team, linkedin_post_link, github_repo_link, client_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.start_date,
        project.end_date,
        project.img_url,
        project.developer_team,
        project.linkedin_post_link,
        project.github_repo_link,
        project.client_id,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set ? where id = ?`,
      [project, project.id]
    );
  }
}

module.exports = ProjectManager;

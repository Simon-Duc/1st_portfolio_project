const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  find(id) {
    return this.connection.query(
      `select project.id, project.name, project.description, project.start_date, project.end_date, project.img_url, project.developer_team, project.linkedin_post_link, project.github_repo_link, client.name as client_name from  ${ProjectManager.table} inner join client on client.id = project.client_id where project.id = ?`,
      [id]
    );
  }

  findWithClientId(id) {
    return this.connection.query(
      `select id, name, description, start_date, end_date, img_url, developer_team, linkedin_post_link, github_repo_link, client_id from ${ProjectManager.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select project.id, project.name, project.description, project.start_date, project.end_date, project.img_url, project.developer_team, project.linkedin_post_link, project.github_repo_link, client.name as client_name from ${ProjectManager.table} inner join client on client.id = project.client_id`
    );
  }

  findAllWithClientId() {
    return this.connection.query(
      `select id, name, description, start_date, end_date, img_url, developer_team, linkedin_post_link, github_repo_link, client_id from ${ProjectManager.table}`
    );
  }

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

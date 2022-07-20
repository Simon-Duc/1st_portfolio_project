const AbstractManager = require("./AbstractManager");

class ToolManager extends AbstractManager {
  static table = "tool";

  insert(tool) {
    return this.connection.query(
      `insert into ${ToolManager.table} (name, img_url, category) values (?, ?, ?)`,
      [tool.name, tool.img_url, tool.category]
    );
  }

  update(tool) {
    return this.connection.query(
      `update ${ToolManager.table} set ? where id = ?`,
      [tool, tool.id]
    );
  }
}

module.exports = ToolManager;

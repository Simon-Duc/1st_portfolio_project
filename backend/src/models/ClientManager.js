const AbstractManager = require("./AbstractManager");

class ClientManager extends AbstractManager {
  static table = "client";

  insert(client) {
    return this.connection.query(
      `insert into ${ClientManager.table} (name) values (?)`,
      [client.name]
    );
  }

  update(client) {
    return this.connection.query(
      `update ${ClientManager.table} set name = ? where id = ?`,
      [client.name, client.id]
    );
  }
}

module.exports = ClientManager;

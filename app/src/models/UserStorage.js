"use strict";
//아래 문장 uesr = require 이거 추가한적이 없는데 왜있을까..?

const db = require("../config/db");
class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;

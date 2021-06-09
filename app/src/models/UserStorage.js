"use strict";

const crypto = require("crypto");
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
      const hashpassword = crypto
        .createHash("sha256")
        .update(userInfo["psword"])
        .digest("base64");
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, hashpassword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;

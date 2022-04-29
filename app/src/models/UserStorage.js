"use strict";

class UserStorage {
  static #users = {
    id: ["aaa", "bbb", "ccc"],
    psword: ["aaaa", "bbbb", "cccc"],
    name: ["a", "b", "c"]
  };

  static getUsers(...fields) {
      const users = this.#users;
      const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
      }, {});
      return newUsers;
  }
}

module.exports = UserStorage;
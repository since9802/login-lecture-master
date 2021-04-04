"use strict";

class UserStorage {
  static #users = {
    //class안에 변수선언할때는 const 필요없음. 그래서 users라고한것
    // #users를 한이유는 은닉화를하기위함. 외부에서 불러올수없게하기위해
    id: ["since9802", "이규혁", "제발됐으면"],
    psword: ["1234", "12345", "123456"],
    name: ["고난주간", "종려주일", "부활절"],
  };
  //은닉화 했으니 매서드로 전달함
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

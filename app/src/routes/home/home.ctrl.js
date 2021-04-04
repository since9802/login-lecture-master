"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  }, // function hello(req, res){}와 const hello =() =>{} 는 똑같은것임

  login: (req, res) => {
    res.render("home/login");
  },
};
//login.js에서 body로 데이터를 전달하니깐 해당body를 보기위해서 req.body라고작성함
const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;
    //userstorage에 user에 데이터를 받아옴(users앞에 static을 해서 클래스안에있는 users정보를 얻어올수있음)
    const users = UserStorage.getUsers("id", "psword");

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하셨습니다";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

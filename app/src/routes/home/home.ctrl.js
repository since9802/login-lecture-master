"use strict";

const User = require("../../models/User");

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
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

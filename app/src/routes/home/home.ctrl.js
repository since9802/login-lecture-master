"use strict";
const logger = require("../../config/logger");
const User = require("../../models/User");
// function hello(req, res){}와 const hello =() =>{} 는 똑같은것임
const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "홈 화면으로 이동"`);
    res.render("home/index");
  },

  login: (req, res) => {
    logger.info(`GET / login 200 "로그인 화면으로 이동"`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET / register 200 "회원가입 화면으로 이동"`);
    res.render("home/register");
  },
  review: (req, res) => {
    logger.info(`GET / review 200 "회원가입 화면으로 이동"`);
    res.render("home/review");
  },
};
//login.js에서 body로 데이터를 전달하니깐 해당body를 보기위해서 req.body라고작성함
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.err)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, ${response.err}"`
      );
    else
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, ${response.err}"`
      );
    else
      logger.info(
        `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

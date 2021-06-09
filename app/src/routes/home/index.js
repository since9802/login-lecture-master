"use strict";

const express = require("express"); //app은 index.js에 없어서 이 app도 사용할 수 있게하기 위해 express를 require한것임
const router = express.Router(); //router를 사용하기위해 express.Router();를 불러와야함

const ctrl = require("./home.ctrl");
//router.get은 원래 app.get이었는데 라우터파일에 들어오고나서 router.get으로 수정함
router.get("/", ctrl.output.home); //router.get("/", (req, res) => {} ->브라우저로 /경로로 요청이 들어오면(요청이 뭔지 알아야하니깐 req, res를 씀)
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/review", ctrl.output.review);
//로그인데이터를 받아서 로그인기능을 처리함,home.ctrl에 process함수만듬
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
module.exports = router; //

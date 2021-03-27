// 이 파일은 라우팅 관련된 파일이며 routes/home에 보기좋도록 저장해놓은파일임
"use strict";

const express = require("express"); //app은 index.js에 없어서 이 app도 사용할 수 있게하기 위해 express를 require한것임
const router = express.Router(); //router를 사용하기위해 express.Router();를 불러와야함

const ctrl = require("./home.ctrl");

//router.get은 원래 app.get이었는데 라우터파일에 들어오고나서 router.get으로 수정함
router.get("/", ctrl.hello); //router.get("/", (req, res) => {} ->브라우저로 /경로로 요청이 들어오면(요청이 뭔지 알아야하니깐 req, res를 씀)
//res.render("home/index"); ->app.use로 routes.home인 이 파일에 들어오면 위의 문법으로 인해 home/index를 실행
router.get("/login", ctrl.login);

module.exports = router; //exports는 router를 사용하기위해 외부로 보내주는 역할

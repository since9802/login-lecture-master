"use strict";
// 모듈
const express = require("express"); //express불러오기
const app = express(); //app이라는 변수에 express 실행

// 라우팅
const home = require("./src/routes/home");
// 앱세팅
app.set("views", "./src/views"); //
app.set("view engine", "ejs"); //view engine을 ejs사용
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); //use - > 미들웨어를 등록해주는 메서드

module.exports = app;

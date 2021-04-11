"use strict";
// 모듈
const express = require("express"); //express불러오기
const app = express(); //app이라는 변수에 express 실행
const dotenv = require("dotenv");
dotenv.config();
// 라우팅
const home = require("./src/routes/home");
// 앱세팅
app.set("views", "./src/views"); //
app.set("view engine", "ejs"); //view engine을 ejs사용
app.use(express.static(`${__dirname}/src/public`)); //login.ejs의 경로중 js에 접근할 수 있도록 해줌
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
app.use("/", home); //use - > 미들웨어를 등록해주는 메서드

module.exports = app;

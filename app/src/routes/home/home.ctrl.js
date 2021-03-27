"use strict";

const hello = (req, res) => {
  res.render("home/index");
}; // function hello(req, res){}와 const hello =() =>{} 는 똑같은것임

const login = (req, res) => {
  res.render("home/login");
};
module.exports = {
  hello,
  login,
};

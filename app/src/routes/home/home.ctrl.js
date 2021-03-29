"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  }, // function hello(req, res){}와 const hello =() =>{} 는 똑같은것임

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};

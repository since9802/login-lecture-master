"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  }, // function hello(req, res){}와 const hello =() =>{} 는 똑같은것임

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["since9802", "이규혁", "제발됐으면"],
  psword: ["1234", "12345", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};

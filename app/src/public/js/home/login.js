"use strict";

const id = document.querySelector("#id"), //login.ejs 에 id로 부여된 id의값을 불러오기
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login); //로그인버튼이 클릭될때 login함수실행

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  //fetch=서버전달
  //login이라는경로 post라는 매서드로 데이터를 받을수있는 api가 마련이 되어있어야함 그게 login.ejx에 있음
  fetch("/login", {
    method: "POST", //body를 통해서 전달할때는 post의 형식으로 보내야함
    headers: {
      "Content-Type": "application/json", //내가 보내는 데이터의 타입은 json이다
    },
    body: JSON.stringify(req), //body라는 키값으로 req를 전달, req를 json형태로 감싸줌,
  }) //서버에서 응답한 데이터를 다시받으려면 fetch 끝에 then이라는 매서드를 사용해서 데이터를 가져올수있음
    .then((res) => res.json())
    //promise값이 나와서 한번 더 then을 사용한다
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    });
}

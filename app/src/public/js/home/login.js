"use strict";

const id = document.querySelector("#id"), //login.ejs 에 id로 부여된 id의값을 불러오기
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login); //로그인버튼이 클릭될때 login함수실행

function login() {
  const req = {
    //값을 불러오기위해 value라는 값을 사용함
    id: id.value,
    psword: psword.value,
  };
  //login이라는 경로로 전달, 전달할 데이터를{}안에 작성
  // 데이터가 서버로 전달이 되는것인데 이 데이터를 서버로 받으려면 /login이라는 경로로, post라는 method로 데이터를 받을 수 있는 api가 마련이되어야함
  //그래서 login.ejs에 router.post를 하는것임(method:post를 사용해서)
  fetch("/login", {
    method: "POST", //body를 통해서 전달할때는 method중에서 post의 형식으로 보내야함
    headers: {
      "Content-Type": "application/json", //내가 보내는 데이터의 타입은 json이다
    },
    body: JSON.stringify(req), //body라는 키값으로 req를 전달, req를 json형태로 감싸줌,stringify는 req를 문자열로 바꿔주는 매서드임
  }) //서버에서 응답한 데이터(id랑 psword랑 같은지)를 다시받으려면 fetch 끝에 then이라는 매서드를 사용해서 데이터를 가져올수있음
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

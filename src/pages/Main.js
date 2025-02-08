import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="wrap">
      <header>
        <link to="/clubpage">
          <button>회원가입</button>
        </link>
        <link to="/login">
          <button>로그인</button>
        </link>
      </header>
      <div id="contents"></div>
      <footer></footer>
    </div>
  );
}

export default Main;

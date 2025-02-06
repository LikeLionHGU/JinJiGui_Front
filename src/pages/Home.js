import React from "react";
import { Link } from 'react-router-dom';

function Home () {
  return (
    <div>
      <div> 홈페이지 입니다 </div>

      <link to="/login">
        <button>로그인</button> 
      </link>

      <link to="/clubpage">
        <button>마이페이지</button>
      </link>

    </div>
  )
}

export default Home;
import React, { useEffect } from "react";
import sendAccessTokenToBackend from "../apis/sendAccessTokenToBackend";
import styled from "styled-components";
import loginLogo from "../assets/login_logo.svg";
import { useNavigate } from "react-router-dom";

/*
사용자의 토큰을 받는 페이지
이 페이지에서는 url 에 포함된 response token을 백엔드에 보내고 성공하면 메인화면으로 보내고 실패하면 에러처리를 할것이다. 

URLSearchParams를 통해 url에 있는 토큰을 추출하고 그 토큰을 axios를 사용해 backend에 보낸다. 

이후 성공하면 navigate를 통해 메인화면으로 보낸다. 
실패하면 에러처리 (알아서 ~)
*/

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedHash = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const idToken = parsedHash.get("id_token");

        console.log(idToken);

        await sendAccessTokenToBackend(idToken);

        navigate("/");
      } catch (error) {
        console.error("로그인 과정에서 에러가 발생했습니다.", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <Loding>
      <img id="loging-logo" src={loginLogo} alt="loading" />
    </Loding>
  );
};

export default Loading;

const Loding = styled.div`
  display:flex;
  flex-direction: row;

  width: 500px;
  font-family: "Noto Sans KR", "Noto Sans", serif;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-content: center
  font-size: 30px;
  color: #fff;
`;

// const LoadingText = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 30px;
//   font-weight: 500;
//   color: #333;
// `;

// const ErrorText = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   color: #e74c3c;
//   text-align: center;
//   padding: 20px;
// `;

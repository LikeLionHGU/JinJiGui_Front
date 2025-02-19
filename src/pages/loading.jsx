import React, { useEffect, useState } from "react";
import sendAccessTokenToBackend from "../apis/sendAccessTokenToBackend";
import styled from "styled-components";
import loginLogo from "../assets/login_logo.svg";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sessionState } from "../atom/atom";

/*
사용자의 토큰을 받는 페이지
이 페이지에서는 url 에 포함된 response token을 백엔드에 보내고 성공하면 메인화면으로 보내고 실패하면 에러처리를 할것이다. 

URLSearchParams를 통해 url에 있는 토큰을 추출하고 그 토큰을 axios를 사용해 backend에 보낸다. 

이후 성공하면 navigate를 통해 메인화면으로 보낸다. 
실패하면 에러처리 (알아서 ~)
*/

const Loading = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const setSessioState = useSetRecoilState(sessionState);
  console.log("sessionState", sessionState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedHash = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const idToken = parsedHash.get("id_token");

        console.log(idToken);

        await sendAccessTokenToBackend(idToken);
        setSessioState(true);
        navigate("/");

        const json = await parsedHash.json();
        console.log("서버 응답:", json);

        if (json.status && json.isFirst !== undefined) {
          setIsLoading(false);
          // isFirst true면 add-info로, false면 메인으로
          navigate(json.isFirst ? "/add-info" : "/");
        } else {
          throw new Error("서버 응답 데이터 형식이 올바르지 않습니다.");
        }
      } catch (error) {
        console.error("에러가 발생했습니다.", error);
        setError(error.massage);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div id="loading">
      {error ? (
        <ErrorText>에러: {error}</ErrorText>
      ) : (
        <LoadingImage>
          {isLoading ? "" : ""}
          <img id="loging-logo" src={loginLogo} alt="loading" />
        </LoadingImage>
      )}
      <div style={{ color: "white" }}>로딩중...</div>
    </div>
  );
};

export default Loading;

const LoadingImage = styled.div`
  display:flex;
  flex-direction: row;

  margin-top: 200px;

  width: 1000px;

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

const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #e74c3c;
  text-align: center;
  padding: 20px;
`;

import React, { useEffect, useState } from "react";
import sendAccessTokenToBackend from "../apis/sendAccessTokenToBackend";
import styled from "styled-components";
import loginLogo from "../assets/login_logo.svg";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sessionState } from "../atom/atom";

const Loading = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const setSessionState = useSetRecoilState(sessionState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedHash = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const idToken = parsedHash.get("id_token");

        if (!idToken) {
          throw new Error("세션이 만료되었습니다. 로그인을 다시 해주세요.");
        }

        console.log("받은 idToken:", idToken);

        // 서버에 토큰을 보내고 응답을 받음
        const response = await sendAccessTokenToBackend(idToken);

        if (!response || !response.status) {
          throw new Error("서버 응답이 올바르지 않습니다.");
        }

        console.log("서버 응답:", response);

        // 세션 상태 업데이트
        setSessionState(response.user || true);

        // `isFirst` 값이 true이면 추가 정보 입력 페이지로, false이면 메인으로
        navigate(response.isFirst ? "/add-info" : "/");
      } catch (error) {
        console.error("에러 발생:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate, setSessionState]);

  return (
    <div id="loading">
      {error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <LoadingImage>
          {isLoading ? "" : ""}
          <img id="loading-logo" src={loginLogo} alt="loading" />
        </LoadingImage>
      )}
      <div style={{ color: "white" }}>로딩 중...</div>
    </div>
  );
};

export default Loading;

const LoadingImage = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  font-size: 30px;
  color: #fff;
`;

const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #e74c3c;
  text-align: center;
  padding: 20px;
`;

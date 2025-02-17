import React, { useEffect, useState } from "react";
import sendAccessTokenToBackend from "../apis/sendAccessTokenToBackend";
import styled from "styled-components";
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
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   const fetchData = async () => {
     try {
       // URL에서 토큰 추출
       const parsedHash = new URLSearchParams(
         window.location.hash.substring(1)
       );
       const idToken = parsedHash.get("id_token");

       // 토큰 유효성 검사
       if (!idToken) {
         throw new Error("ID 토큰이 없습니다.");
       }

       console.log("Received token:", idToken);

       // 백엔드로 토큰 전송
       await sendAccessTokenToBackend(idToken);

       // 세션 정보 요청
       const response = await fetch(
         "https://jinjigui.info:443/api/auth/google/session",
         {
           credentials: "include",
         }
       );

       if (!response.ok) {
         throw new Error("서버 응답이 올바르지 않습니다.");
       }

       const json = await response.json();
       console.log("서버 응답:", json);

       // 응답 데이터 검증 및 라우팅
       if (json.status && json.isFirst !== undefined) {
         setIsLoading(false);
         // isFirst true면 add-info로, false면 메인으로
         navigate(json.isFirst ? "/add-info" : "/");
       } else {
         throw new Error("서버 응답 데이터 형식이 올바르지 않습니다.");
       }
     } catch (error) {
       console.error("로그인 과정에서 에러가 발생했습니다.", error);
       setError(error.message);
       setIsLoading(false);
       // 에러 메시지를 사용자가 볼 수 있도록 잠시 대기 후 리다이렉트
       setTimeout(() => navigate("/"), 2000);
     }
   };

   fetchData();
 }, [navigate]);

 return (
   <Container>
     {error ? (
       <ErrorText>에러: {error}</ErrorText>
     ) : (
       <LoadingText>
         {isLoading ? "로그인 중입니다..." : "리다이렉트 중..."}
       </LoadingText>
     )}
   </Container>
 );
};

export default Loading;

const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: #f5f5f5;
`;

const LoadingText = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 30px;
 font-weight: 500;
 color: #333;
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
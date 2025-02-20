import styled from "styled-components";
import "./styles/Login.css";
import GoogleLoginBtn from "../assets/GoogleLoginBtn.svg";

import LoginLogo from "../assets/login_logo.svg";

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    // CSRF 방지를 위한 state 생성
    const state = Math.random().toString(36).substring(2);
    sessionStorage.setItem("oauth_state", state);

    // nonce 생성
    const nonce =
      Math.random().toString(36).substring(2) + Date.now().toString(36);

    // URL 파라미터 설정
    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    console.log("id: " + process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID);
    console.log("uri: " + process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI);
    console.log("id: " + process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID);

    // 환경변수에서 값을 가져와 URL에 추가
    authUrl.searchParams.append(
      "client_id",
      process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID
    );
    authUrl.searchParams.append(
      "redirect_uri",
      process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI
    );
    authUrl.searchParams.append("response_type", "id_token");
    authUrl.searchParams.append("scope", "email profile openid");
    authUrl.searchParams.append("nonce", nonce);
    authUrl.searchParams.append("access_type", "offline");
    authUrl.searchParams.append("prompt", "consent");
    authUrl.searchParams.append("state", state);

    window.location.href = authUrl.toString();
  };

  return (
    <Wrapper>
      <div id="loginBox">
        <div id="loginTop">
          <img id="loginLogo" src={LoginLogo} alt="loginLogo" />
          <h4 id="loginText">모보까에 로그인하고 공연 모보까</h4>
        </div>
        <div id="divide_line"></div>
        <div id="google-login-button">
          <LoginBtn
            src={GoogleLoginBtn}
            alt="구글 로그인"
            onClick={handleGoogleLogin}
            width={250}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default GoogleLogin;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.img`
  cursor: pointer;
`;

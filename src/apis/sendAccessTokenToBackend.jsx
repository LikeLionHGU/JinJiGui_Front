import axios from "axios";

const sendAccessTokenToBackend = async (idToken, setLoginCheck, navigate) => {
  console.log(idToken);
  try {
    //   axios.post("https://jinjigui.info/api/auth/google/session", null, {
    //     params: { credential: idToken },
    //   });

    const serverResponse = await axios.post(
      `https://jinjigui.info/api/auth/google/session`,
      {},
      {
        params: {
          credential: idToken,
        },
        withCredentials: true,
      }
    );

    // if (serverResponse.status === 200) {
    //   setLoginCheck(false); // 로그인 성공
    //   sessionStorage.setItem("idToken", idToken); // idToken 저장
    //   navigate("/"); // '/list'로 이동
    // } else {
    //   setLoginCheck(true); // 실패 시 로그인 상태 업데이트
    // }

    // 서버로부터의 응답 처리
    console.log("Login successful with server response:", serverResponse);

    // memberId를 sessionStorage에 저장
    sessionStorage.setItem("serverResponse", serverResponse.data.id);

    return serverResponse.data;
  } catch (error) {
    console.error("Login failed with error:", error);
    throw error;
  }
};

export default sendAccessTokenToBackend;

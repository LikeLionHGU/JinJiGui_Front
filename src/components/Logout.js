import axios from "axios";

export const Logout = async (idToken) => {
  const response = axios.get(
    `https://jin-ji-gui-front.netlify.app/api/auth/google/logout`,
    {},
    {
      params: {
        credential: idToken,
      },
      withCredentials: true,
    }
  );
  console.log("API 호출 성공:", response.data);
  if (response) {
    sessionStorage.clear();
  }

  return response;
};

import { useEffect, useState } from "react";
import "./styles/UpdateProfile.css";
import SubHeader from "../components/SubHeader";
import Swal from "sweetalert2";

function UpdateProfile() {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    stdCode: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = sessionStorage.getItem("serverResponse");

  // 사용자 정보 조회
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `https://jinjigui.info:443/mypage/update/${userId}`,
          {
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("사용자 정보를 불러오는데 실패했습니다.");
        }

        const userData = await response.json();
        console.log("User Data:", userData); // 이 줄 추가

        // 서버에서 받은 데이터를 폼 데이터 형식에 맞게 변환
        setFormData({
          userName: userData.user.userName || "",
          phoneNumber: userData.user.phoneNumber || "",
          stdCode: userData.user.stdCode || "",
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    // 데이터 유효성 검사
    if (!formData.userName?.toString()) {
      Swal.fire("이름을 입력해주세요.");
      return;
    }

    if (!formData.phoneNumber?.toString()) {
      Swal.fire("전화번호를 입력해주세요.");
      return;
    }

    if (!formData.stdCode?.toString()) {
      Swal.fire("학번을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(
        `https://jinjigui.info:443/mypage/save/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            user: {
              userName: formData.userName?.toString() || "",
              phoneNumber: formData.phoneNumber?.toString() || "",
              stdCode: formData.stdCode?.toString() || "",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "저장에 실패했습니다.");
      }

      await Swal.fire({
        title: "저장 성공!",
        text: `성공적으로 정보를 수정했습니다.`,
        icon: "success",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error saving profile:", error);
      Swal.fire({
        title: `에러`,
        text: `${error.response.data.message || "저장에 실패했습니다"}`,
        icon: "error",
      });
    }
  };

  if (isLoading) {
    return <div className="update-page-body">로딩 중...</div>;
  }

  if (error) {
    return <div className="update-page-body">에러: {error}</div>;
  }

  return (
    <>
      <SubHeader />
      <div className="update-page-body">
        <div className="update-page-box">
          <div className="update-page-title-box">
            <div className="update-page-title">회원정보 수정</div>
          </div>
          <form onSubmit={saveProfile} className="update-page-content-box">
            <div className="update-page-content" id="update-my-name">
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="이름"
              />
            </div>
            <div className="update-page-content" id="update-my-phone">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="전화번호"
              />
            </div>
            <div className="update-page-content" id="update-my-stdNum">
              <input
                type="text"
                name="stdCode"
                value={formData.stdCode}
                onChange={handleInputChange}
                placeholder="학번"
              />
            </div>
            <div className="update-page-saveButton-box">
              <button type="submit" className="update-page-saveButton">
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;

import { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import "./styles/UpdateProfile.css";

function UpdateProfile() {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    stdCode: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 사용자 정보 조회
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://jinjigui.info:443/myPage/update");
        if (!response.ok) {
          throw new Error("사용자 정보를 불러오는데 실패했습니다.");
        }

        const userData = await response.json();

        // 서버에서 받은 데이터를 폼 데이터 형식에 맞게 변환
        setFormData({
          userName: userData.userName || "",
          phoneNumber: userData.phoneNumber || "",
          stdCode: userData.stdCode || "",
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

    try {
      const response = await fetch(`http://jinjigui.info:443/myPage/save`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          phoneNumber: formData.phoneNumber,
          stdCode: formData.stdCode,
        }),
      });

      if (!response.ok) {
        throw new Error("저장에 실패했습니다.");
      }

      alert("저장되었습니다!");
      window.location.reload();
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("저장 중 오류가 발생했습니다.");
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

import { useEffect, useState } from "react";
import "./styles/UpdateProfile.css";
import Swal from "sweetalert2";

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
        const response = await fetch(
          "https://jinjigui.info:443/mypage/update",
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
      alert("이름을 입력해주세요.");
      return;
    }

    if (!formData.phoneNumber?.toString()) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    if (!formData.stdCode?.toString()) {
      alert("학번을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("https://jinjigui.info:443/mypage/save", {
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
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "저장에 실패했습니다.");
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
  );
}

export default UpdateProfile;

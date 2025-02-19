import { useState } from "react";
import { useEffect } from "react";
import "../pages/styles/PerformDetail.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

function PerformDetail() {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [data, setData] 
  const [data] = useState({
    available: "false",
    qrImage: "",
    totalCost: "",
    account: "",
    remain_tickets: "",
  });
  const [isDisable, setIsDisable] = useState(false);

  // 시간 포맷 함수: HH:MM:SS 형식을 HH:MM 형식으로 변환
  const formatTime = (timeString) => {
    if (!timeString) return timeString;

    if (timeString.includes(":")) {
      const timeParts = timeString.split(":");
      if (timeParts.length >= 2) {
        return `${timeParts[0]}:${timeParts[1]}`;
      }
    }
    return timeString;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jinjigui.info:443/show/${id}`);
      console.log("API 응답 데이터:", response.data);
      if (response.data && response.data.show) {
        setShow(response.data.show);
        console.log("api전체", show);
      } else {
        console.error("API응답에 'show'데이터가 없습니다.");
        setShow(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire("데이터를 불러오는 중 오류가 발생했습니다.");
      setShow(null);
    } finally {
      setLoading(false);
    }
  };

  //useEffet
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);


  if (loading) {
    return <p>로딩중...</p>;
  }
  /* 티켓 UP DOWN */
  const Decrese = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const Increse = () => {
    if (show && count < show.maxTickets) {
      setCount(count + 1);
    } else {
      Swal.fire({
        title: "경고",
        text:
          `인당 구매 가능한 최대 티켓 수는 ${show.maxTickets}매입니다!`,
        icon: "warning",
      });
    }
  };

  /* 예매 버튼 api 전송 */
  const handleBooking = async () => {
    if (!selectedSchedule) {
      Swal.fire("공연 시간을 선택해 주세요.");
      return;
    }
    if (count === 0) {
      Swal.fire("최소 1장 이상 예매해야 합니다.");
      return;
    }
    console.log("선택된 스케줄 ID:", selectedSchedule.id);
    const requestData = {
      userId: sessionStorage.getItem("serverResponse"),
      ticketNumber: count,
      scheduleId: selectedSchedule.id,
      showId: show.id,
    };
    console.log("Request Data:", requestData);

    try {
      console.log(requestData);
      const response = await axios.post(
        `https://jinjigui.info:443/show/reservation`,
        requestData
      );
      console.log("예매 데이터 보내기 성공", response.data);
      reservationData(response.data);
    } catch (error) {
      console.error("예매 데이터 보내기 실패", error);

      if (error.response) {
        console.error("서버 응답 데이터:", error.response.data);
        Swal.fire({
          title: `에러`,
          text: `${
            error.response.data.message || "서버 오류 또는 로그인 필요"
          }`,
          icon: "error",
        });
      } else {
        Swal.fire("서버 응답이 없습니다. 네트워크 문제일 수 있습니다.");
      }
    }
  };

  const reservationData = async (responseData) => {
    try {
      if (responseData.available === true) {
        setIsDisable(true);
        Swal.fire({
          icon: "success",
          title: "예매 성공!",
          imageUrl: responseData.qrImage,
          imageHeight: 250,
          imageAlt: "송금 QR",
          text: "성공적으로 예매되었습니다.",
          html:
            `<strong>${data.account}</strong>
            로 
            <strong>${data.totalCost}원</strong>
            을 입금해주세요.<br>위 QR을 스캔하여 송금하실 수도 있습니다.<br>입금자명은 <strong>❗️학번+이름❗️</strong>으로 해주세요.<br>계좌번호는 마이페이지에서 확인 가능합니다.`,
        });
      }
    } catch (error) {
      console.error("가져오기 ERROR:", error);
      Swal.fire({
        icon:"error",
        title:"예매 실패!",
        text:"예매에 실패하였습니다.",
        html:
          `남은 티켓은 <strong>${responseData.remain_tickets}장 입니다.`
      })
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div className="DetailBody">
        <div className="PerformDetail_Container">
          <h2>공연 예매</h2>

          <div className="Perform_Box_Info">
            <img
              className="Perform_Box_Pic"
              src={show?.showPic || ""}
              alt="show_image"
            />

            <div className="Titles">
              <div className="names">
                <h1>{show?.title || "공연정보 없음"}</h1>
                <p style={{ marginLeft: "5px" }}>
                  {show?.clubName || "동아리 정보 없음"}
                </p>
              </div>

              <div className="Infos">
                <ul className="ExBox_name">
                  <li>장소</li>
                  <li>날짜</li>
                  <li>런타임</li>
                  <li>카테고리</li>
                  <li>담당자</li>
                </ul>
                <ul className="Each_ExBox">
                  <li>{show?.location || "장소 정보 없음"}</li>
                  <li>
                    {show?.startDate || "시작날짜 정보 없음"} ~{" "}
                    {show?.endDate || "종료날짜 정보 없음"}
                  </li>
                  <li>{show?.runTime || "런타임 정보 없음"}분</li>
                  <li>{show?.category || "카테고리 정보 없음"}</li>
                  <li>
                    {show?.user?.phoneNumber || "연락처 없음"} (
                    {show?.user?.name || "이름 없음"})
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Box_LR">
            <div className="LR" style={{ borderBottomLeftRadius: "20px" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                상세 공연 선택
              </div>

              <select
                className="chosePerformBox"
                onChange={(e) =>
                  setSelectedSchedule(
                    show?.schedule.find((s) => s.id === Number(e.target.value))
                  )
                }
              >
                <option value="">회차를 선택해주세요</option>
                {show?.schedule.map((sch) => (
                  <option key={sch.id} value={sch.id}>
                    {sch.order}공 | {sch.date} | {formatTime(sch.time)} |{" "}
                    {sch.cost}원 | 현재: {sch.applyPeople}/{sch.maxPeople}
                  </option>
                ))}
              </select>
            </div>

            <div className="LR" style={{ borderBottomRightRadius: "20px" }}>
              <div className="LR_tic">
                <div className="tic">
                  <div>티켓 매수</div>
                  <div className="ticketBtns">
                    <button onClick={Decrese}>-</button>
                    <span>{count}매</span>
                    <button className="AddNum" onClick={Increse}>
                      +
                    </button>
                  </div>
                </div>

                <div className="total_tic">
                  <div>총 금액</div>
                  <div className="showPrice">
                    <p>₩ {(selectedSchedule?.cost || 0) * count}</p>
                  </div>
                </div>
              </div>

              <button
                className="BookBtn"
                onClick={handleBooking}
                disabled={isDisable}
              >
                {isDisable ? "예매 완료" : "예매하기"}
              </button>
            </div>
          </div>

          {/* 공연소개 */}
          <div className="showInfoBox">
            <h2>공연에 대한 소개</h2>
            <div className="InfoBox">
              <span>{show?.content || "공연소개글 정보 없음"}</span>
              <img
                style={{ marginTop: "50px", marginBottom: "50px" }}
                src={show?.showPic || ""}
                width={500}
                alt="show_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformDetail;

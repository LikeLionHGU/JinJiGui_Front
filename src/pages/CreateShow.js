import React, { useState } from "react";
import "../pages/styles/createshow.css";
import Swal from "sweetalert2";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState(null);
  const [qrImage, setQrImage] = useState(null);
  const [clubName, setClubName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [runtime, setRunTime] = useState("");
  const [content, setContent] = useState("");
  const [account, setAccount] = useState("");
  const [maxTickets, setMaxTickets] = useState("");
  const [category, setCategory] = useState("");
  const [schedule, setSchedule] = useState({
    order: 0,
    date: "",
    time: "",
    cost: "",
    maxPeople: "",
  });
  const [previewURL, setPreviewURL] = useState(null);

  //기존값 확인하고 새로 생긴 schedule 정보 받아옴
  const updateSchedule = (id, key, value) => {
    setShows((prevShows) =>
      prevShows.map((show, index) =>
        show.id === id ? { ...show, [key]: value, order: index+1 } : show
      )
    );
  };

  //schedule 추가 초기 state 설정정
  const [shows, setShows] = useState([{ id: Date.now() }]);

  /* 사진 미리보기 기능 */
  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPoster(file);
      setPreviewURL(URL.createObjectURL(file)); //미리 보기 url 생성
    }
  };

  const handleQr = (e) => {
    const file = e.target.files[0];
    if (file) {
      setQrImage(file);
    }
  };
  

  //모든 입력란을 받아야 submit 가능 + 빈칸이 어디인지 알려줌
  const makeShow = async () => {
    if (!title) {
      Swal.fire("제목을 입력해 주세요");
      return;
    }
    if (!poster || !(poster instanceof File)) {
      Swal.fire("공연 이미지를 선택해 주세요");
      console.log("포스터 파일 확인:", poster);
      return;
    }
    if (!clubName) {
      Swal.fire("동아리명을 입력해 주세요");
      return;
    }
    if (!location) {
      Swal.fire("장소를 입력해 주세요");
      return;
    }
    if (!startDate) {
      Swal.fire("시작날짜를 입력해 주세요");
      return;
    }
    if (!endDate) {
      Swal.fire("끝 날짜를 입력해 주세요");
      return;
    }
    if (!runtime) {
      Swal.fire("런타임을을 입력해 주세요");
      return;
    }
    if (!account) {
      Swal.fire("계좌를 입력해 주세요");
      return;
    }
    if (!maxTickets) {
      Swal.fire("인당 최대 구매가능 티켓수를 입력해 주세요");
      return;
    }
    if (shows.length === 0) {
      Swal.fire("최소 한 개 이상의 회차 정보를 입력해야 합니다.");
      return;
    }
    for (let i = 0; i < shows.length; i++) {
      if (!shows[i].date) {
        Swal.fire(`${i + 1}공의 날짜를 입력해 주세요`);
        return;
      }
      if (!shows[i].time) {
        Swal.fire(`${i + 1}공의 시작시간을 입력해 주세요`);
        return;
      }
      if (!shows[i].cost) {
        Swal.fire(`${i + 1}공의 가격을 입력해 주세요`);
        return;
      }
      if (!shows[i].maxPeople) {
        Swal.fire(`${i + 1}공의 수용 인원을 입력해 주세요`);
        return;
      }
    }
    

    console.log("show : ",shows);
    console.log("Schedule : ", schedule);

    //보내주어야 하는 전체 데이터
    const requestData = {
      userId: sessionStorage.getItem("serverResponse"),
      title,
      clubName,
      location,
      startDate,
      endDate,
      category,
      runtime,
      account,
      content,
      maxTickets,
      // scheduleList:[schedule]
      schedule: shows.map((show) => ({
        order: show.order,
        date: show.date,
        time: show.time,
        cost: show.cost,
        maxPeople: show.maxPeople
      }))
    }; 
    const formData = new FormData();
    formData.append("poster", poster);

    if (qrImage && qrImage instanceof File) {
      formData.append("qrImage", qrImage);
    } else {
      console.warn("qrImage가 존재하지 않거나 파일이 아닙니다:", qrImage);
    }

    formData.append(
      "request",
      new Blob([JSON.stringify(requestData)], { type: "application/json" })
    ); //request는 모두 application으로 긔긔
    // formData.append("title", title);
    // formData.append("clubName", clubName);
    // formData.append("location", location);
    // formData.append("startDate", startDate);
    // formData.append("endDate", endDate);
    // formData.append("runtime", runtime);
    // formData.append("account", account);
    // formData.append("content", content);
    // formData.append("maxTickets", maxTickets);
    // formData.append("poster", poster);

    console.log("폼 데이터 확인:");
    for(let [key, value] of formData.entries()) {
      if (key === "request") {
        value.text().then(text => console.log(`${key}:`, JSON.parse(text)));
      } else if (value instanceof File) {
        console.log(`${key}:`, value.name); // 파일 이름 출력
        } else {
        console.log(`${key}:`, value);
    }
  }

    try{
      const response = await axios.post(
        `https://jinjigui.info:443/manager/create/save`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire("저장이 완료되었습니다.");
      console.log("저장 성공", response.data);
    } catch (error) {
      console.error("저장 오류", error);
      Swal.fire(
        "저장 실패",
        `서버 오류:${error.response?.data?.message || "알 수없는 오류"}`,
        "error"
      );
    }
  };

  //제목 글자 수 limit
  const handletitle = (e) => {
    if (e.target.value.length <= 14) {
      setTitle(e.target.value);
    } else {
      Swal.fire("14글자를 초과할 수 없습니다.");
    }
  };

  // 공연 소개란 limit
  const handleContent = (e) => {
    if (e.target.value.length <= 500) {
      setContent(e.target.value);
    } else {
      Swal.fire("500자를 초과할 수 없습니다.");
    }
  };

  // 회차 행 추가
  const handleAddRow = () => {
    // const newArr = [{...schedule}, {id: Date.now()}];
    // console.log(newArr);
    setShows( (prevShow) => [
      ...prevShow, 
      { 
        id: Date.now(),
        order:prevShow.length + 1,
        date:"",
        time:"",
        cost:"",
        maxPeople:"",
      },
    ]);
  };

  // 해당 행 삭제
  const handleRemoveRow = (id) => {
    setShows(shows.filter((show) => show.id !== id));
  };

  /* 기존의 사진을 받아온 방식 */
  // const handleImage = (e) => {
  //   setPoster(e.target.files[0]);
  // };

  return (
    <div>
      <div className="CreateBody">
        <h3>공연 생성하기</h3>
        <div className="Create_Container">
          <div className="Detail_Entire_Box">
            <div className="SImage_Box">
              <img src={previewURL} alt="미리보기" />
              <div className="img_show">
                <input
                  type="file"
                  id="fileUpload"
                  accept="image/*"
                  onChange={handleImg}
                />
              </div>
            </div>

            <div className="entir_Boxs">
              <ul className="Name_info">
                <li>제목</li>
                <li>동아리명</li>
                <li>장소</li>
                <li>날짜</li>
                <li>런타임</li>
                <li>카테고리</li>
              </ul>

              {/* 공연 정보들  */}
              <div className="input_Boxs">
                <input
                  type="text"
                  placeholder="제목을 입력하시오 (최대14자)"
                  value={title}
                  onChange={handletitle}
                />
                <input
                  type="text"
                  placeholder="동아리 이름을 입력하시오"
                  onChange={(e) => setClubName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="장소를 입력하시오"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <div className="Start_To_End">
                  <input
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  ~
                  <input
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div className="runtime_shows">
                  <input
                    type="number"
                    // inputMode="numeric"
                    placeholder="공연 런타임을 입력하시오(분)"
                    onChange={(e) => setRunTime(e.target.value)}
                  />
                </div>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">공연 카테고리를 선택하세요</option>
                  <option value="밴드">밴드</option>
                  <option value="춤">춤</option>
                  <option value="아카펠라">아카펠라</option>
                  <option value="연극">연극</option>
                  <option value="힙합">힙합</option>
                  <option value="악기연주">악기연주</option>
                  <option value="기타">기타</option>
                </select>
              </div>
            </div>
          </div>

          <div className="Each_shows">상세 공연 만들기</div>

          {/* 상세 공연 이름들 헤더 */}
          <div className="Each_shows_Name">
            <div className="form">회차 (공)</div>
            <div>날짜</div>
            <div>시간</div>
            <div>가격 (원)</div>
            <div>수용인원 (명)</div>
            <div>삭제</div>
          </div>

          {/* 실제 회차 행들 */}
          {shows.map((show) => (
            <div key={show.id} className="Detail_show">
              {/* 회차 입력란 */}
              <div className="shows_line">
                <input
                  className="form_detail_show"
                  type="number"
                  // inputMode="numeric"
                  placeholder="0"
                  onChange={(e) => updateSchedule(show.id,"order", e.target.value)}
                />
                공
              </div>
              <div className="form_detail_date_2">
                <input
                  className="form_detail_date"
                  type="date"
                  onChange={(e) => updateSchedule(show.id,"date", e.target.value)}
                />
              </div>
              <div className="form_detail_time_2">
                <input
                  className="form_detail_time"
                  type="time"
                  onChange={(e) => updateSchedule(show.id,"time", e.target.value)}
                />
              </div>
              <div className="form_detail_price_2">
                <input
                  className="form_detail_price"
                  type="number"
                  placeholder="00000"
                  onChange={(e) => updateSchedule(show.id,"cost", e.target.value)}
                />
                원
              </div>
              <div className="form_detail_maxPeople_2">
                <input
                  className="form_detail_maxPeople"
                  type="number"
                  // inputMode="numeric"
                  placeholder="00"
                  onChange={(e) => updateSchedule(show.id,"maxPeople", e.target.value)}
                />
                명
              </div>
              <div className="delete_Btn">
                <button onClick={() => handleRemoveRow(show.id)}> - </button>
              </div>
            </div>
          ))}

          {/* 회차 추가 버튼 */}
          <div className="add_show" onClick={handleAddRow}>
            회차 추가하기(+)
          </div>

          <div className="last_input">
            <div className="Club_account">
              <label className="Club_account_space">계좌번호</label>
              <div className="last_Detail_input">
                <input
                  type="text"
                  // inputMode="numeric"
                  placeholder="입금받을 계좌번호와 은행을 입력하시오."
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>
            </div>
            <div className="Club_account">
              <label className="Club_account_space2">카카오페이 QR</label>
              <div className="qrImage">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleQr}
                />
              </div>
            </div>
            <div className="Club_account">
              <label>인당 최대 구매수</label>
              <div className="last_Detail2_input">
                <input
                  type="number"
                  // inputMode="numeric"
                  placeholder="00"
                  onChange={(e) => setMaxTickets(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 공연소개란 */}
        <div className="show_content_Entire">
          <p>공연에 대한 소개</p>
          <div className="show_content">
            <textarea
              placeholder="공연에 대한 소개를 작성하세요"
              onChange={handleContent}
            />
            <p>( {content.length}/500 )</p>
          </div>
        </div>

        <button className="make_show_submit" onClick={makeShow}>
          생성하기
        </button>
      </div>
    </div>
  );
}

export default Create;

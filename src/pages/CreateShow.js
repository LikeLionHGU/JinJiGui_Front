import React, { use, useState } from "react";
import "../pages/styles/createshow.css";
import Swal from "sweetalert2";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState(null);
  const [clubName, setClubName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [runtime, setRunTime] = useState("");
  const [content, setContent] = useState("");
  const [account, setAccount] = useState("");
  const [maxTickets, setMaxTickets] = useState("");
  const [schedule, setSchedule] = useState({ 
    order: 0,
    date: "",
    time: "",
    cost: "",
    maxPeople: ""
  });
  
  //기존값 확인하고 새로 생긴 schedule 정보 받아옴
  const updateSchedule = (key, value) => {
    setSchedule((preSchedule) => ({
      ...preSchedule,
      [key]: value
    }));
  };
  
  //schedule 추가 초기 state 설정정
  const [shows, setShows] = useState([{ id: Date.now() }]);

  //모든 입력란을 받아야 submit 가능 + 빈칸이 어디인지 알려줌
  const makeShow = async () => { 
    if(!title){
      Swal.fire("제목을 입력해 주세요");
      return;
    }
    if(!poster || !(poster instanceof File)){
      Swal.fire("공연 이미지를 선택해 주세요");
      console.log("포스터 파일 확인:",poster);
      return;
    }
    if(!clubName){
      Swal.fire("동아리명을 입력해 주세요");
      return;
    }
    if(!location){
      Swal.fire("장소를 입력해 주세요");
      return;
    }
    if(!startDate){
      Swal.fire("시작날짜를 입력해 주세요");
      return;
    }
    if(!endDate){
      Swal.fire("끝 날짜를 입력해 주세요");
      return;
    }
    if(!runtime){
      Swal.fire("런타임을을 입력해 주세요");
      return;
    }
    if(!account){
      Swal.fire("계좌를 입력해 주세요");
      return;
    }
    if(!maxTickets){
      Swal.fire("인당 최대 구매가능 티켓수를 입력해 주세요");
      return;
    }
    if(schedule.order < 0){
      Swal.fire("회차 공연을 추가해 주세요");
      return;
    }
    if(!schedule.date){
      Swal.fire(schedule.order+"공의 날짜를 입력해 주세요");
      return;
    }
    if(!schedule.time){
      Swal.fire(schedule.order+"공의 시작시간을 입력해 주세요");
      return;
    }
    if(!schedule.cost){
      Swal.fire(schedule.order+"공의 가격을 입력해 주세요");
      return;
    }
    if(!schedule.maxPeople){
      Swal.fire(schedule.order+"공의 시작시간을 입력해 주세요");
      return;
    }
    //보내주어야 하는 전체 데이터
    const requestData = {
      title,
      clubName,
      location,
      startDate,
      endDate,
      runtime,
      account,
      content,
      maxTickets,
      schedule
    }; 

    const formData = new FormData();
    formData.append("poster", poster);
    formData.append("request", new Blob([JSON.stringify(requestData)], { type: "application/json" })); //request는 모두 application으로 긔긔
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

    //폼 데이터 확인 보내졌는지 check
    console.log("폼 데이터 확인:");
    for(let [key,value]of formData.entries()){
      console.log(`${key}:`,value);
    }
    // api연결
    try{
      const response = await axios.post(
        `https://jinjigui.info:443/manager/create/save`,
        formData,
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      );
      Swal.fire("저장이 완료되었습니다.");
      console.log("저장 성공",response.data);
    }catch(error){
      console.error("저장 오류",error);
      Swal.fire("저장 실패",`서버 오류:${error.response?.data?.message || "알 수없는 오류"}`,"error");
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
    setShows([...shows, { id: Date.now() }]);
  };

  // 해당 행 삭제
  const handleRemoveRow = (id) => {
    setShows(shows.filter((show) => show.id !== id));
  };

  const handleImage = (e) => {
    setPoster(e.target.files[0]);
  };

  return (
    <div>
      <div className="CreateBody">
        <h3>공연 생성하기</h3>
        <div className="Create_Container">
          <div className="Detail_Entire_Box">
            <div className="SImage_Box">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImage}
              />
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
                  onChange={(e)=>setClubName(e.target.value)}
                />
                <input 
                  type="text" 
                  placeholder="장소를 입력하시오"
                  onChange={(e)=>setLocation(e.target.value)}
                />
                <div className="Start_To_End">
                  <input 
                    type="date"
                    onChange={(e)=>setStartDate(e.target.value)}
                  />
                  ~
                  <input 
                    type="date"
                    onChange={(e)=>setEndDate(e.target.value)}
                  />
                </div>
                <input
                  type="number"
                  min='10'
                  // inputMode="numeric"
                  placeholder="공연 런타임을 입력하시오 (분)"
                  onChange={(e)=>setRunTime(e.target.value)}
                />
                <select>
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
            <div className="form">회차</div>
            <div>날짜</div>
            <div>시간</div>
            <div>가격</div>
            <div>수용인원</div>
            <div>삭제</div>
          </div>

          {/* 실제 회차 행들 */}
          {shows.map((show) => (
            <div key={show.id} className="Detail_show">
              {/* 회차 입력란 */}
              <div className="form">
                <input 
                  type="number" 
                  min='1'
                  // inputMode="numeric" 
                  placeholder="0공"
                  onChange={(e) => updateSchedule("order", e.target.value)}
                />
              </div>
              <div className="form">
                <input 
                  type="date" 
                  placeholder="00월 00일"
                  onChange={(e) => updateSchedule("date", e.target.value)}
                />
              </div>
              <div className="form">
                <input 
                  type="time" 
                  placeholder="00시 00분"
                  onChange={(e) => updateSchedule("time", e.target.value)}
                />
              </div>
              <div className="form">
                <input 
                  type="number" 
                  min='0'
                  // inputMode="numeric" 
                  placeholder="0000원"
                  onChange={(e) => updateSchedule("cost", e.target.value)}
                />
              </div>
              <div className="form">
                <input 
                  type="number"
                  min='0'
                  // inputMode="numeric"
                  placeholder="00명"
                  onChange={(e) => updateSchedule("maxPeople", e.target.value)}
                />
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
                  type="number"
                  // inputMode="numeric"
                  placeholder="입금받을 계좌번호를 입력하시오."
                  onChange={(e)=>setAccount(e.target.value)}
                />
              </div>
            </div>
            <div className="Club_account">
              <label>인당 최대 구매수</label>
              <div className="last_Detail2_input">
                <input 
                  type="number" 
                  min='1'
                  max='20'
                  // inputMode="numeric" 
                  placeholder="00"
                  onChange={(e)=>setMaxTickets(e.target.value)}
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

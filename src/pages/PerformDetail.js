import React from "react";
import { useState } from "react";
import "../pages/styles/PerformDetail.css";

function PerformDetail () {

  // const show_info = [
  //   {
  //     "show": {
  //       "title": "우리 집에 보내줘",
  //       "location": "학관 103호",
  //       "startDate": "2025-01-25",
  //       "endDate": "2025-02-21",
  //       "maxTickets": 5,
  //       "schedule": [
  //           {
  //             "id": 12345,
  //             "order": 1,
  //             "date": "2025-02-11",
  //             "time": "12:00:00",
  //             "cost": 4500
  //           },
  //           {
  //             "id": 45654,
  //             "order": 2,
  //             "date": "2025-02-11",
  //             "time": "14:00:00",
  //             "cost": 4500
  //           },
  //           {
  //             "id": 4576575,
  //             "order": 3,
  //             "date": "2025-02-11",
  //             "time": "16:00:00",
  //             "cost": 4500
  //           }
  //     ],
  //     "club": {
  //         "photo": "./mutsa.png",
  //         "name": "멋쟁이사자처럼",
  //         "category": "코미디",
  //         "content": "멋쟁이사자처럼 돈 많은 백수가 되고 싶습니다.",
  //         "url1": "",
  //         "url2": ""
  //       }
  //     }
  //   }
  // ];


  const [count, setCount] = useState({max:3, min:0});

  const Decrese = () => {
    if (count.min <= 0){
      setCount({...count, min: count.min});
      return;
    }
    setCount({...count, min: count.min-1});
  };
  const Increse = () => {
    if (count.min === 3){
      setCount({...count, min: count.max});
      return;
    }
    setCount({...count, min: count.min+1});
  }

  const [perform, setPerform] = useState([]);
  const [schedule, setSchedule] = useState([]);

  // const {Price}

  return (
    <div>
      <div className="DetailBody">
        <div className="PerformDetail_Container">
          <h3>공연 상세 페이지</h3>

          <div className="Perform_Box">
            <div class="Titles">
              <h1>{perform.title}</h1>
              <ul className="ExBox_name">                
                <li>장소</li>
                <li>날짜</li>
                {/* <li>런타임</li> */}
                <li>카테고리</li>
              </ul>
              <ul className="Each_ExBox">
                <li>{perform.location}</li>
                <li>{perform.startDate} ~ {perform.endDate}</li>
                {/* <li>{show.}분</li>  */}
                <li>{perform.category}</li>
              </ul>
            </div>
          </div>

        <div className="Box_LR"> 
          
          <div className="Perform_LB">
            <select className="chosePerformBox">
              <option value="">상세 공연 선택</option>
              <option value={schedule.id}>{schedule.order}공 {schedule.date}</option>
            </select>
          </div>

          <div className="Perform_RB">
            <span>티켓 매수</span>
            <div className="ticketBtns">
              <button onClick={Decrese}>- </button>
              <span>{count.min}매</span>
              <button className="AddNum"onClick={Increse}> + </button>
            </div>
            
            <span>총 금액</span>
            {/* <span>{showcost}원</span> */}
            <button className="BookBtn">예매하기</button>
          </div>

        </div>
        
        <div>
          <div className="showInfoBox">
            <p>공연에 대한 소개</p>
            <div className="InfoBox">
              <span>
                우리 집에 왜 왔니 왜 왔니 왜 왔니?~ 웃음꽃을 찾으러 왔단다 왔단다~ 
                <br/>
                코미디 맛집 어메이징 스토리가 돌아왔다!
                <br/>
                공지
                <br/>
                티켓은 공연 당일, 공연장 앞에서 수령하실 수 있습니다.
                티켓 환불은 5월 19일 일요일(공연전주 일요일)까지만 가능합니다.
              </span>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default PerformDetail;
import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../pages/styles/PerformDetail.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

function PerformDetail () {

  const {id} = useParams(); 
  const [show, setShow ] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try{
      const response = await axios.get(`https://jinjigui.info:443/show/${id}`);
      setShow(response.data.show);
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire("데이터를 불러오는 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const Decrese = () => {
    if (count > 0){
      setCount(count-1);
    }
  };

  const Increse = () => {
    if (show && count < show.maxTickets ){
      setCount(count + 1);
    }
  };

  /* 예매 버튼 api 전송 */
  const handleBooking = async () => {
    if(!selectedSchedule){
      Swal.fire("공연 시간을 선택해 주세요.");
      return;
    }
    if(count === 0) {
      Swal.fire("최소 1장 이상 예매해야 합니다.");
      return;
    }
    const requestData = {
      userId: 1,
      ticketNumber: count,
      showId: selectedSchedule.id,
    };
    try {
      const response = await axios.post(`https://jinjigui.info/show/${id}/reservation`,requestData);
      Swal.fire("예매 성공!","성공적으로 예매 되었습니다.","success");
      console.log("예매 성공",response.data);
    } catch(error){
      console.error("예매 오류",error);
      Swal.fire("예매 실패","예매에 실패했습니다.","error");
    }
  }
  return (
    <div>
      <div className="DetailBody">
        <div className="PerformDetail_Container">
          <h3>공연 상세 페이지</h3>

          <div className="Perform_Box_Info">
            <img 
              className="Perform_Box_Pic"
              src={show?.showPic || ""}
              alt="show_image"
            />

            <div className="Titles">
              <div className="names">
                <h1>{show.title}우리집</h1>
                <p>{show.clubName}</p>
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
                  <li>{show.location}</li>
                  <li>{show.startDate} ~ {show.endDate}</li>
                  <li>{show.runtime}분</li> 
                  <li>{show.category}</li>
                  <li>{show.user.phoneNumber} ({show.user.name})</li>
                </ul>
              </div>
            </div>

          </div>

        <div className="Box_LR"> 
          
          <div className="LR">
            <select className="chosePerformBox"
              onChange={(e) =>
                setSelectedSchedule(show?.schedule.find((s)=> s.id === Number(e.target.value)))
              }
            >
              <option value="">상세 공연 선택</option>
              {show?.schedule.map((sch)=>(
                <option key={sch.id} value={sch.id}>
                  {sch.order}공 {sch.date} {sch.time} {sch.cost} {sch.applyPeople}/{sch.maxPeople} 
                </option>
              ))}
            </select>
          </div>

          <div className="LR">
            <div className="LR_tic">
              <div className="tic">
                <div>티켓 매수</div>
                <div className="ticketBtns">
                  <button onClick={Decrese}>-</button>
                  <span>{count}매</span>
                  <button className="AddNum"onClick={Increse}>+</button>
                </div>
              </div>
    
              <div className="total_tic">
                <div>총 금액</div>
                <div className="showPrice">
                  <p>{(selectedSchedule?.cost || 0) * count}원</p>
                </div>
              </div>
            </div>
            
            <button className="BookBtn" onClick={handleBooking}>예매하기</button>
          </div>
        </div>
        
        {/* 공연소개 */}
          <div className="showInfoBox">
            <p>공연에 대한 소개</p>
            <div className="InfoBox">
              <span>
                {show.content}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default PerformDetail;


// import React, { useState, useEffect } from "react";
// import "../pages/styles/PerformDetail.css";
// import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";

// function PerformDetail() {
//   const { id } = useParams(); 
//   const [show, setShow] = useState(null);
//   const [selectedSchedule, setSelectedSchedule] = useState(null);
//   const [count, setCount] = useState(0);

//   const fetchData = () => {
//     const dummyData = {
//       showPic: "https://via.placeholder.com/150",
//       title: "더미 공연",
//       clubName: "더미 클럽",
//       location: "서울 아트홀",
//       startDate: "2025-03-01",
//       endDate: "2025-03-10",
//       runtime: 120,
//       category: "뮤지컬",
//       user: {
//         phoneNumber: "010-1234-5678",
//         name: "홍길동",
//       },
//       schedule: [
//         {
//           id: 1,
//           order: 1,
//           date: "2025-03-02",
//           time: "19:00",
//           cost: 30000,
//           applyPeople: 20,
//           maxPeople: 100,
//         },
//         {
//           id: 2,
//           order: 2,
//           date: "2025-03-05",
//           time: "20:00",
//           cost: 40000,
//           applyPeople: 50,
//           maxPeople: 120,
//         },
//       ],
//       maxTickets: 5,
//       content: "이 공연은 더미 데이터로 구성된 예제입니다.",
//     };
//     setShow(dummyData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   const Decrese = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const Increse = () => {
//     if (show && count < show.maxTickets) {
//       setCount(count + 1);
//     }
//   };

//   /* 예매 버튼 */
//   const handleBooking = () => {
//     if (!selectedSchedule) {
//       Swal.fire("공연 시간을 선택해 주세요.");
//       return;
//     }
//     if (count === 0) {
//       Swal.fire("최소 1장 이상 예매해야 합니다.");
//       return;
//     }

//     Swal.fire("예매 성공!", "성공적으로 예매 되었습니다.", "success");
//     console.log("예매 성공", {
//       userId: 1,
//       ticketNumber: count,
//       showId: selectedSchedule.id,
//     });
//   };

//   return (
//     <div>
//       <div className="DetailBody">
//         <div className="PerformDetail_Container">
//           <h3>공연 상세 페이지</h3>

//           <div className="Perform_Box_Info">
//             <img className="Perform_Box_Pic" src={show?.showPic || ""} alt="show_image" />
//             <div className="Titles">
//               <div className="names">
//                 <h1>{show?.title}</h1>
//                 <p>{show?.clubName}</p>
//               </div>
//               <div className="Infos">
//                 <ul className="ExBox_name">
//                   <li>장소</li>
//                   <li>날짜</li>
//                   <li>런타임</li>
//                   <li>카테고리</li>
//                   <li>담당자</li>
//                 </ul>
//                 <ul className="Each_ExBox">
//                   <li>{show?.location}</li>
//                   <li>{show?.startDate} ~ {show?.endDate}</li>
//                   <li>{show?.runtime}분</li>
//                   <li>{show?.category}</li>
//                   <li>{show?.user.phoneNumber} ({show?.user.name})</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="Box_LR">
//             <div className="LR">
//               <select
//                 className="chosePerformBox"
//                 onChange={(e) =>
//                   setSelectedSchedule(show?.schedule.find((s) => s.id === Number(e.target.value)))
//                 }
//               >
//                 <option value="">상세 공연 선택</option>
//                 {show?.schedule.map((sch) => (
//                   <option key={sch.id} value={sch.id}>
//                     {sch.order}공 | {sch.date} | {sch.time} | {sch.cost}원 | {sch.applyPeople}/{sch.maxPeople}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="LR">
//               <div className="LR_tic">
//                 <div className="tic">
//                   <div>티켓 매수</div>
//                   <div className="ticketBtns">
//                     <button onClick={Decrese}>-</button>
//                     <span>{count}매</span>
//                     <button className="AddNum" onClick={Increse}>+</button>
//                   </div>
//                 </div>
//                 <div className="total_tic">
//                   <div>총 금액</div>
//                   <div className="showPrice">
//                     <p>{(selectedSchedule?.cost || 0) * count}원</p>
//                   </div>
//                 </div>
//               </div>
//               <button className="BookBtn" onClick={handleBooking}>예매하기</button>
//             </div>
//           </div>

//           <div className="showInfoBox">
//             <p>공연에 대한 소개</p>
//             <div className="InfoBox">
//               <span>{show?.content}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PerformDetail;
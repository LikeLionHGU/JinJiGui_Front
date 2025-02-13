import React from "react";
import { useState } from "react";
import "../pages/styles/PerformDetail.css";



function PerformDetail () {

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
  return (
    <div>
      <div className="DetailBody">
        <div className="PerformDetail_Container">
          <h3>공연 상세 페이지</h3>

          <div className="Perform_Box">
            <div class="Titles">
              <h1>우리집에 왜 왔니?</h1>
              <ul className="ExBox_name">                
                <li>장소</li>
                <li>날짜</li>
                <li>런타임</li>
                <li>카테고리</li>
                <li>연락처</li>
              </ul>
              <ul className="Each_ExBox">
                <li>학관 102호</li>
                <li>2025.04.07 ~ 2025.04.09</li>
                <li>90분</li>
                <li>연극</li>
                <li>010-0000-0000</li>
              </ul>
            </div>
          </div>

          <div className="Perform_LB">
            <select className="chosePerformBox">
              <option value="">상세 공연 선택</option>
            </select>
          </div>

          <div className="Perform_RB">
            <span>티켓 매수</span>
            <button onClick={Decrese}>- </button>

            <span>{count.min}매</span>

            <button className="AddNum"onClick={Increse}> + </button>
            <button className="BookBtn">예매하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformDetail;
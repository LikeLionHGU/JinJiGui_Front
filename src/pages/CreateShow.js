import React from "react";
import "../pages/styles/createshow.css"


function Create () {
  return (
    <div>
      <div className="CreateBody">
        <img
          src=""
          alt="show_image"
        />

        <div>
          <ul>
            <li>제목</li>
            <li>동아리명</li>
            <li>장소</li>
            <li>날짜</li>
            <li>런타임</li>
            <li>카테고리</li>
          </ul>
        </div>
        
        <div>
          <input
            type="text"
            placeholder="제목을 입력하시오"
          />
          <input
            type="text"
            placeholder="동아리 이름을 입력하시오"
          />
          <input
            type="text"
            placeholder="장소를 입력하시오"
          />
          <div className="Start_To_End">
            <input
              type="date"
            />
            <input
              type="date"
            />
          </div>
          <input
            type="text"
            placeholder="공연 런타임을 입력하시오"
          />
          <select>
            <option 밴드/>
            <option 춤/>
            <option 아카펠라/>
            <option 연극/>
            <option 힙합/>
            <option 악기연주/>
            <option 기타/>
          </select>
        </div>
        <div>상세 공연 만들기</div>

        <div>
          <div>회차</div>
          <div>날짜</div>
          <div>시간</div>
          <div>가격</div>
          <div>수용인원</div>
          <div>삭제</div>
        </div>
        <div>
          <input
            type="number"
          />
          공
        </div>
        <input
          type="date"
        />
        <input
          type="time"
        />
        <div>
          <input
            type="number"
          />
          원
        </div>
        <div>
          <input
            type="number"
          />
          명
        </div>
        <button> - </button>
      </div>
    </div>
  )
}

export default Create;
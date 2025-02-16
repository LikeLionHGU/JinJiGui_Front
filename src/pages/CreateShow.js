import React from "react";
import "../pages/styles/createshow.css"
import { useState } from "react";
import Swal from "sweetalert2";


function Create () {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const handletitle = (e) => {
    if(e.target.value.length <= 14){
      setTitle(e.target.value);
    }else{
      Swal.fire("14글자를 초과할 수 없습니다.")
    }
  }

/* 공연 소개란 */
  const handleContent = (e) => {
    if(e.target.value.length <= 300){
      setContent(e.target.value);
    }else{
      Swal.fire("300자를 초과할 수 없습니다.")
    }
  }

  
  return (
    <div>
      <div className="CreateBody">
        <h3>공연 생성하기</h3>
        <div className="Create_Container">
          <div className="Detail_Entire_Box">
            <div className="SImage_Box">
            <img
              className="showImage"
              src=""
              alt="show_image"
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

            <div className="input_Boxs">
              <input
                type="text"
                placeholder="제목을 입력하시오 (최대14자)"
                onChange={handletitle}
              />
              <input
                type="text"
                placeholder="동아리 이름을 입력하시오"
              />
              <input
                type="text"
                placeholder="장소를 입력하시오"
              />
              <div className="Start_To_End"> {/*날짜 시작-끝*/}
                <input
                  type="date"
                />
                ~
                <input
                  type="date"
                />
              </div>
              <input
                type="number"
                placeholder="공연 런타임을 입력하시오"
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

          <div>상세 공연 만들기</div>

          <div>
            <div>회차</div>
            <div>날짜</div>
            <div>시간</div>
            <div>가격</div>
            <div>수용인원</div>
            <div>삭제</div>
          </div>

          <div className="Detail_show">
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

        <div className="show_content_Entire">
          <p>공연에 대한 소개</p>
          <div className="show_content">
            <textarea 
              value={content}
              onChange={handleContent}
            />
            <p>( {content.length}/300 )</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create;
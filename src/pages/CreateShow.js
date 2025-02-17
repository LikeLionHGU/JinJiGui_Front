// // // // // import React from "react";
// // // // // import "../pages/styles/createshow.css"
// // // // // import { useState } from "react";
// // // // // import Swal from "sweetalert2";


// // // // // function Create () {

// // // // //   const [title, setTitle] = useState("");
// // // // //   const [content, setContent] = useState("");
  
// // // // //   const handletitle = (e) => {
// // // // //     if(e.target.value.length <= 14){
// // // // //       setTitle(e.target.value);
// // // // //     }else{
// // // // //       Swal.fire("14글자를 초과할 수 없습니다.")
// // // // //     }
// // // // //   }

// // // // // /* 공연 소개란 */
// // // // //   const handleContent = (e) => {
// // // // //     if(e.target.value.length <= 500){
// // // // //       setContent(e.target.value);
// // // // //     }else{
// // // // //       Swal.fire("500자를 초과할 수 없습니다.")
// // // // //     }
// // // // //   }

  
// // // // //   return (
// // // // //     <div>
// // // // //       <div className="CreateBody">
// // // // //         <h3>공연 생성하기</h3>
// // // // //         <div className="Create_Container">
// // // // //           <div className="Detail_Entire_Box">
// // // // //             <div className="SImage_Box">
// // // // //             <input
// // // // //               type="file"
// // // // //               accept="image/*"
// // // // //             />
// // // // //           </div>

// // // // //           <div className="entir_Boxs">
// // // // //             <ul className="Name_info">
// // // // //               <li>제목</li>
// // // // //               <li>동아리명</li>
// // // // //               <li>장소</li>
// // // // //               <li>날짜</li>
// // // // //               <li>런타임</li>
// // // // //               <li>카테고리</li>
// // // // //             </ul>

// // // // //             <div className="input_Boxs">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="제목을 입력하시오 (최대14자)"
// // // // //                 value={title}
// // // // //                 onChange={handletitle}
// // // // //               />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="동아리 이름을 입력하시오"
// // // // //               />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="장소를 입력하시오"
// // // // //               />
// // // // //               <div className="Start_To_End"> {/*날짜 시작-끝*/}
// // // // //                 <input
// // // // //                   type="date"
// // // // //                 />
// // // // //                 ~
// // // // //                 <input
// // // // //                   type="date"
// // // // //                 />
// // // // //               </div>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 placeholder="공연 런타임을 입력하시오 (분)"
// // // // //               />
// // // // //               <select>
// // // // //                 <option value="">공연 카테고리를 선택하세요</option>
// // // // //                 <option value="밴드">밴드</option>
// // // // //                 <option value="춤">춤</option>
// // // // //                 <option value="아카펠라">아카펠라</option>
// // // // //                 <option value="연극">연극</option>
// // // // //                 <option value="힙합">힙합</option>
// // // // //                 <option value="악기연주">악기연주</option>
// // // // //                 <option value="기타">기타</option>
// // // // //               </select>
// // // // //             </div>
// // // // //           </div>
// // // // //           </div>

// // // // //           <div className="Each_shows">상세 공연 만들기</div>

// // // // //           <div className="Each_shows_Name">
// // // // //             <div className="form">회차</div>
// // // // //             <div>날짜</div>
// // // // //             <div>시간</div>
// // // // //             <div>가격</div>
// // // // //             <div>수용인원</div>
// // // // //             <div>삭제</div>
// // // // //           </div>

// // // // //           <div className="Detail_show">
// // // // //             <div className="show_inputs">
// // // // //               <input
// // // // //                   type="text"
// // // // //                   inputMode="numeric"
// // // // //                   placeholder="0"
// // // // //               />
// // // // //               공
// // // // //             </div>
// // // // //             <input
// // // // //               type="date"
// // // // //             />
// // // // //             <input
// // // // //               type="time"
// // // // //             />
// // // // //             <div>
// // // // //               <input
// // // // //                   type="text"
// // // // //                   inputMode="numeric"
// // // // //                   placeholder="0000"
// // // // //               />
// // // // //               원
// // // // //             </div>
// // // // //             <div>
// // // // //               <input
// // // // //                   type="text"
// // // // //                   inputMode="numeric"
// // // // //                   placeholder="00"
// // // // //               />
// // // // //               명
// // // // //             </div>
// // // // //             <button> - </button>
// // // // //           </div>
// // // // //           {/* 회차 추가 버튼 */}
// // // // //           <div className="add_show">
// // // // //             회차 추가하기(+)
// // // // //           </div>

// // // // //           <div className="last_input">
// // // // //             <div className="Club_account">
// // // // //               <label className="Club_account_space">
// // // // //                 계좌번호
// // // // //               </label>
// // // // //               <div className="last_Detail_input">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   inputMode="numeric"
// // // // //                   placeholder="입금받을 계좌번호를 입력하시오."
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="Club_account">
// // // // //               <label>
// // // // //                 인당 최대 구매수
// // // // //               </label>
// // // // //               <div className="last_Detail2_input">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   inputMode="numeric"
// // // // //                   placeholder="00"
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>


// // // // //         <div className="show_content_Entire">
// // // // //           <p>공연에 대한 소개</p>
// // // // //           <div className="show_content">
// // // // //             <textarea 
// // // // //               value={content}
// // // // //               placeholder="공연에 대한 소개를 작성하세요"
// // // // //               onChange={handleContent}
// // // // //             />
// // // // //             <p>( {content.length}/500 )</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default Create;

// // // // import React, { useState } from "react";
// // // // import "../pages/styles/createshow.css";
// // // // import Swal from "sweetalert2";

// // // // function Create() {
// // // //   const [title, setTitle] = useState("");
// // // //   const [content, setContent] = useState("");

// // // //   // 회차(세부 공연) 행들을 관리할 state 추가 (초기엔 한 행)
// // // //   const [shows, setShows] = useState([{ id: Date.now() }]);

// // // //   const handletitle = (e) => {
// // // //     if (e.target.value.length <= 14) {
// // // //       setTitle(e.target.value);
// // // //     } else {
// // // //       Swal.fire("14글자를 초과할 수 없습니다.");
// // // //     }
// // // //   };

// // // //   /* 공연 소개란 */
// // // //   const handleContent = (e) => {
// // // //     if (e.target.value.length <= 500) {
// // // //       setContent(e.target.value);
// // // //     } else {
// // // //       Swal.fire("500자를 초과할 수 없습니다.");
// // // //     }
// // // //   };

// // // //   // 회차 행 추가 함수
// // // //   const handleAddRow = () => {
// // // //     setShows([...shows, { id: Date.now() }]);
// // // //   };

// // // //   // 해당 회차 행 삭제 함수
// // // //   const handleRemoveRow = (id) => {
// // // //     setShows(shows.filter((show) => show.id !== id));
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <div className="CreateBody">
// // // //         <h3>공연 생성하기</h3>
// // // //         <div className="Create_Container">
// // // //           <div className="Detail_Entire_Box">
// // // //             <div className="SImage_Box">
// // // //               <input type="file" accept="image/*" />
// // // //             </div>

// // // //             <div className="entir_Boxs">
// // // //               <ul className="Name_info">
// // // //                 <li>제목</li>
// // // //                 <li>동아리명</li>
// // // //                 <li>장소</li>
// // // //                 <li>날짜</li>
// // // //                 <li>런타임</li>
// // // //                 <li>카테고리</li>
// // // //               </ul>

// // // //               <div className="input_Boxs">
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="제목을 입력하시오 (최대14자)"
// // // //                   value={title}
// // // //                   onChange={handletitle}
// // // //                 />
// // // //                 <input type="text" placeholder="동아리 이름을 입력하시오" />
// // // //                 <input type="text" placeholder="장소를 입력하시오" />
// // // //                 <div className="Start_To_End">{/*날짜 시작-끝*/}
// // // //                   <input type="date" />
// // // //                   ~
// // // //                   <input type="date" />
// // // //                 </div>
// // // //                 <input type="number" placeholder="공연 런타임을 입력하시오 (분)" />
// // // //                 <select>
// // // //                   <option value="">공연 카테고리를 선택하세요</option>
// // // //                   <option value="밴드">밴드</option>
// // // //                   <option value="춤">춤</option>
// // // //                   <option value="아카펠라">아카펠라</option>
// // // //                   <option value="연극">연극</option>
// // // //                   <option value="힙합">힙합</option>
// // // //                   <option value="악기연주">악기연주</option>
// // // //                   <option value="기타">기타</option>
// // // //                 </select>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="Each_shows">상세 공연 만들기</div>

// // // //           <div className="Each_shows_Name">
// // // //             <div className="form">회차</div>
// // // //             <div>날짜</div>
// // // //             <div>시간</div>
// // // //             <div>가격</div>
// // // //             <div>수용인원</div>
// // // //             <div>삭제</div>
// // // //           </div>

// // // //           {/* shows 배열을 순회하여 회차 행 렌더링 */}
// // // //           {shows.map((show) => (
// // // //             <div key={show.id} className="Detail_show">
// // // //               <div className="show_inputs">
// // // //                 <input type="text" inputMode="numeric" placeholder="0" />
// // // //                 공
// // // //               </div>
// // // //               <input type="date" />
// // // //               <input type="time" />
// // // //               <div>
// // // //                 <input type="text" inputMode="numeric" placeholder="0000" />
// // // //                 원
// // // //               </div>
// // // //               <div>
// // // //                 <input type="text" inputMode="numeric" placeholder="00" />
// // // //                 명
// // // //               </div>
// // // //               <button onClick={() => handleRemoveRow(show.id)}> - </button>
// // // //             </div>
// // // //           ))}

// // // //           {/* 회차 추가 버튼 */}
// // // //           <div className="add_show" onClick={handleAddRow}>
// // // //             회차 추가하기(+)
// // // //           </div>

// // // //           <div className="last_input">
// // // //             <div className="Club_account">
// // // //               <label className="Club_account_space">계좌번호</label>
// // // //               <div className="last_Detail_input">
// // // //                 <input
// // // //                   type="text"
// // // //                   inputMode="numeric"
// // // //                   placeholder="입금받을 계좌번호를 입력하시오."
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //             <div className="Club_account">
// // // //               <label>인당 최대 구매수</label>
// // // //               <div className="last_Detail2_input">
// // // //                 <input type="text" inputMode="numeric" placeholder="00" />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="show_content_Entire">
// // // //           <p>공연에 대한 소개</p>
// // // //           <div className="show_content">
// // // //             <textarea
// // // //               value={content}
// // // //               placeholder="공연에 대한 소개를 작성하세요"
// // // //               onChange={handleContent}
// // // //             />
// // // //             <p>( {content.length}/500 )</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Create;


// // // import React, { useState } from "react";
// // // import "../pages/styles/createshow.css";
// // // import Swal from "sweetalert2";

// // // function Create() {
// // //   const [title, setTitle] = useState("");
// // //   const [content, setContent] = useState("");

// // //   // 회차(세부 공연) 행들을 관리할 state (초기엔 한 행)
// // //   const [shows, setShows] = useState([{ id: Date.now() }]);

// // //   const handletitle = (e) => {
// // //     if (e.target.value.length <= 14) {
// // //       setTitle(e.target.value);
// // //     } else {
// // //       Swal.fire("14글자를 초과할 수 없습니다.");
// // //     }
// // //   };

// // //   // 공연 소개란
// // //   const handleContent = (e) => {
// // //     if (e.target.value.length <= 500) {
// // //       setContent(e.target.value);
// // //     } else {
// // //       Swal.fire("500자를 초과할 수 없습니다.");
// // //     }
// // //   };

// // //   // 회차 행 추가 함수
// // //   const handleAddRow = () => {
// // //     setShows([...shows, { id: Date.now() }]);
// // //   };

// // //   // 해당 회차 행 삭제 함수
// // //   const handleRemoveRow = (id) => {
// // //     setShows(shows.filter((show) => show.id !== id));
// // //   };

// // //   return (
// // //     <div>
// // //       <div className="CreateBody">
// // //         <h3>공연 생성하기</h3>
// // //         {/* 높이를 고정하지 않고 내용에 따라 자동으로 늘어나도록 수정 */}
// // //         <div className="Create_Container">
// // //           <div className="Detail_Entire_Box">
// // //             <div className="SImage_Box">
// // //               <input type="file" accept="image/*" />
// // //             </div>

// // //             <div className="entir_Boxs">
// // //               <ul className="Name_info">
// // //                 <li>제목</li>
// // //                 <li>동아리명</li>
// // //                 <li>장소</li>
// // //                 <li>날짜</li>
// // //                 <li>런타임</li>
// // //                 <li>카테고리</li>
// // //               </ul>

// // //               <div className="input_Boxs">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="제목을 입력하시오 (최대14자)"
// // //                   value={title}
// // //                   onChange={handletitle}
// // //                 />
// // //                 <input type="text" placeholder="동아리 이름을 입력하시오" />
// // //                 <input type="text" placeholder="장소를 입력하시오" />
// // //                 <div className="Start_To_End">
// // //                   <input type="date" />
// // //                   ~
// // //                   <input type="date" />
// // //                 </div>
// // //                 <input type="number" placeholder="공연 런타임을 입력하시오 (분)" />
// // //                 <select>
// // //                   <option value="">공연 카테고리를 선택하세요</option>
// // //                   <option value="밴드">밴드</option>
// // //                   <option value="춤">춤</option>
// // //                   <option value="아카펠라">아카펠라</option>
// // //                   <option value="연극">연극</option>
// // //                   <option value="힙합">힙합</option>
// // //                   <option value="악기연주">악기연주</option>
// // //                   <option value="기타">기타</option>
// // //                 </select>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="Each_shows">상세 공연 만들기</div>

// // //           <div className="Each_shows_Name">
// // //             <div className="form">회차</div>
// // //             <div>날짜</div>
// // //             <div>시간</div>
// // //             <div>가격</div>
// // //             <div>수용인원</div>
// // //             <div>삭제</div>
// // //           </div>

// // //           {/* 회차 행들 렌더링 */}
// // //           {shows.map((show) => (
// // //             <div key={show.id} className="Detail_show">
// // //               <div className="show_inputs">
// // //                 <input type="text" inputMode="numeric" placeholder="0" />
// // //                 공
// // //               </div>
// // //               <input type="date" />
// // //               <input type="time" />
// // //               <div>
// // //                 <input type="text" inputMode="numeric" placeholder="0000" />
// // //                 원
// // //               </div>
// // //               <div>
// // //                 <input type="text" inputMode="numeric" placeholder="00" />
// // //                 명
// // //               </div>
// // //               <button onClick={() => handleRemoveRow(show.id)}> - </button>
// // //             </div>
// // //           ))}

// // //           {/* 회차 추가 버튼 */}
// // //           <div className="add_show" onClick={handleAddRow}>
// // //             회차 추가하기(+)
// // //           </div>

// // //           <div className="last_input">
// // //             <div className="Club_account">
// // //               <label className="Club_account_space">계좌번호</label>
// // //               <div className="last_Detail_input">
// // //                 <input
// // //                   type="text"
// // //                   inputMode="numeric"
// // //                   placeholder="입금받을 계좌번호를 입력하시오."
// // //                 />
// // //               </div>
// // //             </div>
// // //             <div className="Club_account">
// // //               <label>인당 최대 구매수</label>
// // //               <div className="last_Detail2_input">
// // //                 <input type="text" inputMode="numeric" placeholder="00" />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="show_content_Entire">
// // //           <p>공연에 대한 소개</p>
// // //           <div className="show_content">
// // //             <textarea
// // //               value={content}
// // //               placeholder="공연에 대한 소개를 작성하세요"
// // //               onChange={handleContent}
// // //             />
// // //             <p>( {content.length}/500 )</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Create;


// // import React, { useState } from "react";
// // import "../pages/styles/createshow.css";
// // import Swal from "sweetalert2";

// // function Create() {
// //   const [title, setTitle] = useState("");
// //   const [content, setContent] = useState("");

// //   // 회차(세부 공연) 행들을 관리하는 state (초기엔 한 행)
// //   const [shows, setShows] = useState([{ id: Date.now() }]);

// //   const handletitle = (e) => {
// //     if (e.target.value.length <= 14) {
// //       setTitle(e.target.value);
// //     } else {
// //       Swal.fire("14글자를 초과할 수 없습니다.");
// //     }
// //   };

// //   // 공연 소개란
// //   const handleContent = (e) => {
// //     if (e.target.value.length <= 500) {
// //       setContent(e.target.value);
// //     } else {
// //       Swal.fire("500자를 초과할 수 없습니다.");
// //     }
// //   };

// //   // 회차 행 추가 함수
// //   const handleAddRow = () => {
// //     setShows([...shows, { id: Date.now() }]);
// //   };

// //   // 해당 회차 행 삭제 함수
// //   const handleRemoveRow = (id) => {
// //     setShows(shows.filter((show) => show.id !== id));
// //   };

// //   return (
// //     <div>
// //       <div className="CreateBody">
// //         <h3>공연 생성하기</h3>
// //         <div className="Create_Container">
// //           <div className="Detail_Entire_Box">
// //             <div className="SImage_Box">
// //               <input type="file" accept="image/*" />
// //             </div>

// //             <div className="entir_Boxs">
// //               <ul className="Name_info">
// //                 <li>제목</li>
// //                 <li>동아리명</li>
// //                 <li>장소</li>
// //                 <li>날짜</li>
// //                 <li>런타임</li>
// //                 <li>카테고리</li>
// //               </ul>

// //               <div className="input_Boxs">
// //                 <input
// //                   type="text"
// //                   placeholder="제목을 입력하시오 (최대14자)"
// //                   value={title}
// //                   onChange={handletitle}
// //                 />
// //                 <input type="text" placeholder="동아리 이름을 입력하시오" />
// //                 <input type="text" placeholder="장소를 입력하시오" />
// //                 <div className="Start_To_End">
// //                   <input type="date" />
// //                   ~
// //                   <input type="date" />
// //                 </div>
// //                 <input type="number" placeholder="공연 런타임을 입력하시오 (분)" />
// //                 <select>
// //                   <option value="">공연 카테고리를 선택하세요</option>
// //                   <option value="밴드">밴드</option>
// //                   <option value="춤">춤</option>
// //                   <option value="아카펠라">아카펠라</option>
// //                   <option value="연극">연극</option>
// //                   <option value="힙합">힙합</option>
// //                   <option value="악기연주">악기연주</option>
// //                   <option value="기타">기타</option>
// //                 </select>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="Each_shows">상세 공연 만들기</div>

// //           <div className="Each_shows_Name">
// //             <div className="form">회차</div>
// //             <div>날짜</div>
// //             <div>시간</div>
// //             <div>가격</div>
// //             <div>수용인원</div>
// //             <div>삭제</div>
// //           </div>

// //           {/* 각 회차 행 */}
// //           {shows.map((show) => (
// //             <div key={show.id} className="Detail_show">
// //               {/* 회차 */}
// //               <div className="form">
// //                 <input type="text" inputMode="numeric" placeholder="0" />
// //                 <span>공</span>
// //               </div>
// //               {/* 날짜 */}
// //               <div>
// //                 <input type="date" />
// //               </div>
// //               {/* 시간 */}
// //               <div>
// //                 <input type="time" />
// //               </div>
// //               {/* 가격 */}
// //               <div>
// //                 <input
// //                   type="text"
// //                   inputMode="numeric"
// //                   placeholder="0000"
// //                 />
// //                 <span>원</span>
// //               </div>
// //               {/* 수용인원 */}
// //               <div>
// //                 <input type="text" inputMode="numeric" placeholder="00" />
// //                 <span>명</span>
// //               </div>
// //               {/* 삭제 */}
// //               <div>
// //                 <button onClick={() => handleRemoveRow(show.id)}> - </button>
// //               </div>
// //             </div>
// //           ))}

// //           {/* 회차 추가 버튼 */}
// //           <div className="add_show" onClick={handleAddRow}>
// //             회차 추가하기(+)
// //           </div>

// //           <div className="last_input">
// //             <div className="Club_account">
// //               <label className="Club_account_space">계좌번호</label>
// //               <div className="last_Detail_input">
// //                 <input
// //                   type="text"
// //                   inputMode="numeric"
// //                   placeholder="입금받을 계좌번호를 입력하시오."
// //                 />
// //               </div>
// //             </div>
// //             <div className="Club_account">
// //               <label>인당 최대 구매수</label>
// //               <div className="last_Detail2_input">
// //                 <input type="text" inputMode="numeric" placeholder="00" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="show_content_Entire">
// //           <p>공연에 대한 소개</p>
// //           <div className="show_content">
// //             <textarea
// //               value={content}
// //               placeholder="공연에 대한 소개를 작성하세요"
// //               onChange={handleContent}
// //             />
// //             <p>( {content.length}/500 )</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Create;





// import React, { useState } from "react";
// import "../pages/styles/createshow.css";
// import Swal from "sweetalert2";

// function Create() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   // 회차(세부 공연) 행들을 관리하는 state
//   const [shows, setShows] = useState([{ id: Date.now() }]);

//   const handletitle = (e) => {
//     if (e.target.value.length <= 14) {
//       setTitle(e.target.value);
//     } else {
//       Swal.fire("14글자를 초과할 수 없습니다.");
//     }
//   };

//   // 공연 소개란
//   const handleContent = (e) => {
//     if (e.target.value.length <= 500) {
//       setContent(e.target.value);
//     } else {
//       Swal.fire("500자를 초과할 수 없습니다.");
//     }
//   };

//   // 회차 행 추가 함수
//   const handleAddRow = () => {
//     setShows([...shows, { id: Date.now() }]);
//   };

//   // 해당 회차 행 삭제 함수
//   const handleRemoveRow = (id) => {
//     setShows(shows.filter((show) => show.id !== id));
//   };

//   return (
//     <div>
//       <div className="CreateBody">
//         <h3>공연 생성하기</h3>
//         <div className="Create_Container">
//           <div className="Detail_Entire_Box">
//             <div className="SImage_Box">
//               <input type="file" accept="image/*" />
//             </div>

//             <div className="entir_Boxs">
//               <ul className="Name_info">
//                 <li>제목</li>
//                 <li>동아리명</li>
//                 <li>장소</li>
//                 <li>날짜</li>
//                 <li>런타임</li>
//                 <li>카테고리</li>
//               </ul>

//               <div className="input_Boxs">
//                 <input
//                   type="text"
//                   placeholder="제목을 입력하시오 (최대14자)"
//                   value={title}
//                   onChange={handletitle}
//                 />
//                 <input type="text" placeholder="동아리 이름을 입력하시오" />
//                 <input type="text" placeholder="장소를 입력하시오" />
//                 <div className="Start_To_End">
//                   <input type="date" />
//                   ~
//                   <input type="date" />
//                 </div>
//                 <input type="number" placeholder="공연 런타임을 입력하시오 (분)" />
//                 <select>
//                   <option value="">공연 카테고리를 선택하세요</option>
//                   <option value="밴드">밴드</option>
//                   <option value="춤">춤</option>
//                   <option value="아카펠라">아카펠라</option>
//                   <option value="연극">연극</option>
//                   <option value="힙합">힙합</option>
//                   <option value="악기연주">악기연주</option>
//                   <option value="기타">기타</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="Each_shows">상세 공연 만들기</div>

//           {/* 테이블 헤더처럼 쓰이는 부분 */}
//           <div className="Each_shows_Name">
//             <div className="form">회차</div>
//             <div>날짜</div>
//             <div>시간</div>
//             <div>가격</div>
//             <div>수용인원</div>
//             <div>삭제</div>
//           </div>

//           {/* 실제 회차 행들 */}
//           {shows.map((show) => (
//             <div key={show.id} className="Detail_show">
//               {/* 회차 */}
//               <div className="form">
//                 <input type="text" placeholder="0" />
//                 <span>공</span>
//               </div>
//               {/* 날짜 */}
//               <div>
//                 <input type="text" placeholder="00월 00일" />
//               </div>
//               {/* 시간 */}
//               <div>
//                 <input type="text" placeholder="00시 00분" />
//               </div>
//               {/* 가격 */}
//               <div>
//                 <input type="text" placeholder="0000" />
//                 <span>원</span>
//               </div>
//               {/* 수용인원 */}
//               <div>
//                 <input type="text" placeholder="00" />
//                 <span>명</span>
//               </div>
//               {/* 삭제 버튼 */}
//               <div>
//                 <button onClick={() => handleRemoveRow(show.id)}> - </button>
//               </div>
//             </div>
//           ))}

//           {/* 회차 추가 버튼 */}
//           <div className="add_show" onClick={handleAddRow}>
//             회차 추가하기(+)
//           </div>

//           <div className="last_input">
//             <div className="Club_account">
//               <label className="Club_account_space">계좌번호</label>
//               <div className="last_Detail_input">
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   placeholder="입금받을 계좌번호를 입력하시오."
//                 />
//               </div>
//             </div>
//             <div className="Club_account">
//               <label>인당 최대 구매수</label>
//               <div className="last_Detail2_input">
//                 <input type="text" inputMode="numeric" placeholder="00" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="show_content_Entire">
//           <p>공연에 대한 소개</p>
//           <div className="show_content">
//             <textarea
//               value={content}
//               placeholder="공연에 대한 소개를 작성하세요"
//               onChange={handleContent}
//             />
//             <p>( {content.length}/500 )</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Create;


import React, { useState } from "react";
import "../pages/styles/createshow.css";
import Swal from "sweetalert2";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 회차(세부 공연) 행들을 관리하는 state
  const [shows, setShows] = useState([{ id: Date.now() }]);

  const handletitle = (e) => {
    if (e.target.value.length <= 14) {
      setTitle(e.target.value);
    } else {
      Swal.fire("14글자를 초과할 수 없습니다.");
    }
  };

  // 공연 소개란
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

  return (
    <div>
      <div className="CreateBody">
        <h3>공연 생성하기</h3>
        <div className="Create_Container">
          <div className="Detail_Entire_Box">
            <div className="SImage_Box">
              <input type="file" accept="image/*" />
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
                  value={title}
                  onChange={handletitle}
                />
                <input type="text" placeholder="동아리 이름을 입력하시오" />
                <input type="text" placeholder="장소를 입력하시오" />
                <div className="Start_To_End">
                  <input type="date" />
                  ~
                  <input type="date" />
                </div>
                <input
                  type="number"
                  placeholder="공연 런타임을 입력하시오 (분)"
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

          {/* 헤더 영역 */}
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
              {/* 회차 */}
              <div className="form">
                <input type="text" inputMode="numeric" placeholder="0공" />
              </div>
              <div className="form">
                <input type="date" placeholder="00월 00일" />
              </div>
              <div className="form">
                <input type="time" placeholder="00시 00분" />
              </div>
              <div className="form">
                <input type="text" inputMode="numeric" placeholder="0000원" />
              </div>
              <div className="form">
                <input type="text" inputMode="numeric" placeholder="00명" />
              </div>
              <div>
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
                  inputMode="numeric"
                  placeholder="입금받을 계좌번호를 입력하시오."
                />
              </div>
            </div>
            <div className="Club_account">
              <label>인당 최대 구매수</label>
              <div className="last_Detail2_input">
                <input type="text" inputMode="numeric" placeholder="00" />
              </div>
            </div>
          </div>
        </div>

        <div className="show_content_Entire">
          <p>공연에 대한 소개</p>
          <div className="show_content">
            <textarea
              value={content}
              placeholder="공연에 대한 소개를 작성하세요"
              onChange={handleContent}
            />
            <p>( {content.length}/500 )</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;

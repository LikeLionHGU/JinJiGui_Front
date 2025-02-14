import React from "react";

function AddInfo() {
  function handleSubmit() {}
  return (
    <div id="wrap">
      <form id="addInfo" onSubmit={handleSubmit}>
        <div id="addText"> 추가 정보 기입 </div>
        <div id="infoField">
          <input type="text" id="name" placeholder="이름" required></input>
          <input
            type="text"
            id="number"
            placeholder="전화번호"
            required
          ></input>
          <input type="text" id="stdNumer" placeholder="학번" required></input>
        </div>
        <span className="agree">
          <p className="agree">개인정보 수집에 관해 동의하기</p>
          <input type="checkbox" className="agree"></input>
        </span>
      </form>
    </div>
  );
}

export default AddInfo;

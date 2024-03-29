import React, { useState } from 'react';
import './App.css';

function App() {
  const [responseText, setResponseText] = useState('');

  // GET 요청을 보내는 함수
  async function sendGetRequest(url) {
    let response = await fetch(url);
    let data = await response.text();
    setResponseText(data); // 반환값을 상태에 저장
  }

  return (
    <div>
      <h1>상품목록페이지</h1>
      <hr />
      {/* GET 요청 버튼들 */}
      <button onClick={() => sendGetRequest("/api/hello1")}>Hello 1 요청</button>
      <button onClick={() => sendGetRequest("/api/hello2")}>Hello 2 요청</button>
      <button onClick={() => sendGetRequest("/api/hello3")}>Hello 3 요청</button>
      <button onClick={() => sendGetRequest("/api/hello4")}>Hello 4 요청</button> {/* 버튼 4 추가 */}

      {/* 반환값을 보여주는 부분 */}
      {responseText && <p>반환값: {responseText}</p>}
    </div>
  );
}

export default App;
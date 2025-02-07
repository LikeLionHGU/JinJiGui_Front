import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import ClubPage from "./pages/ClubPage";
import MyPage from "./pages/MyPage";
import Create from "./pages/Create";
import BookTicket from "./pages/BookTicket";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/clubpage" element={<ClubPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/create" element={<Create />}/>
          <Route path="/bookticket" element={<BookTicket />}/>
        </Routes>
      </Router>
    </div>
  );  
}

export default App;

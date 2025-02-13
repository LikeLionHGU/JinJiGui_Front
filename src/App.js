import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ClubPage from "./pages/ClubPage";
import Create from "./pages/Create";
import BookTicket from "./pages/BookTicket";

import "../src/App.css";
import MyReservList from "./pages/MyReservList.js";
import UpdateProfile from "./pages/UpdateProfile.js";
import PerformDetail from "./pages/PerformDetail.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/clubpage" element={<ClubPage />} />
          <Route path="/mypage" element={<MyReservList />} />
          <Route path="/mypage/reservation" element={<MyReservList />} />
          <Route path="/mypage/update" element={<UpdateProfile />} />
          <Route path="/create" element={<Create />}/>
          <Route path="/bookticket" element={<BookTicket />}/>
          <Route path="/performdetail" element={<PerformDetail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );  
}

export default App;

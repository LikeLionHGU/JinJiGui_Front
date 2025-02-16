import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


import Main from "./pages/Main";
import Login from "./pages/Login";

import MyReservList from "./pages/MyReservList.js";
import UpdateProfile from "./pages/UpdateProfile.js";
import PerformDetail from "./pages/PerformDetail.js";

import ManagerShowList from "./pages/ManagerShowList.js"
import ManageClub from "./pages/ManageClub.js";
import HolderList from "./pages/HolderList.js"
import CreateShow from "./pages/CreateShow.js";
import UpdateShow from "./pages/UpdateShow.js";

import BookTicket from "./pages/BookTicket";

import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyReservList />} />
          <Route path="/mypage/reservation" element={<MyReservList />} />
          <Route path="/mypage/update" element={<UpdateProfile />} />
          <Route path="/manager" element={<ManagerShowList />} />
          <Route path="/manager/show" element={<ManagerShowList />} />
          <Route path="/manager/club" element={<ManageClub />} />
          <Route path="/manager/holder" element={<HolderList />} />
          <Route path="/manager/create" element={<CreateShow />} />
          <Route path="/manager/update" element={<UpdateShow />} />
          <Route path="/bookticket" element={<BookTicket />} />
          <Route path="/show/:id" element={<PerformDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

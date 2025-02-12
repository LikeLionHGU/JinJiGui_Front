import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Login from "./pages/Login";
import ClubPage from "./pages/ClubPage";
import MyPage from "./pages/MyPage";
import Create from "./pages/Create";
import BookTicket from "./pages/BookTicket";
import AddInfo from "./pages/AddInfo";

import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clubpage" element={<ClubPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/bookticket" element={<BookTicket />} />
          <Route path="/addinfo" element={<AddInfo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

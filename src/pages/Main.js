import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="wrap">
      <Header id="header"></Header>
      <div id="contents"></div>
      <Footer id="footer"></Footer>
    </div>
  );
}

export default Main;

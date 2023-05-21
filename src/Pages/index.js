import { useState } from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import Header from "../Component/Header/header";

function IndexPage() {
  return (
    <div className="container">
      <Sidebar />
      <div className="navbar-container">
        <Header />
      </div>
    </div>
  );
}

export default IndexPage;

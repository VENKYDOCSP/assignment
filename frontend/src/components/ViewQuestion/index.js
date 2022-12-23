import React from "react";
import Sidebar from "../StackOverflow/Sidebar";
import "./index.css";
import MainQuestion from "./MainQuestion";

function Index() {
  return (
    <div class="stack-index">
      <div class="stack-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default Index;

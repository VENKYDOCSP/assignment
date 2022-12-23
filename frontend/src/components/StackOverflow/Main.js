import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";
// import axios from "axios";

function Main({ questions }) {
  // const [questions, setQuestions] = useState([]);

  // console.log(questions);
  return (
    <div class="main">
      <div class="main-container">
        <div class="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>

          {/* <a href="/add-question"> */}

          {/* </a> */}
        </div>
        <div class="main-desc">
          <p>{questions.length} questions</p>
          <div class="main-filter">
            <div class="main-tabs">
              <div class="main-tab">
                {/* <a href="/">Newest</a> */}
                <Link to="/">Newest</Link>
              </div>
              <div class="main-tab">
                <Link to="/">Active</Link>

                {/* <a href="/">Active</a> */}
              </div>
              <div class="main-tab">
                {/* <a href="/">More</a> */}
                <Link to="/">More</Link>
              </div>
            </div>
            <div class="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div class="questions">
          {questions?.map((_q) => (
            <div class="question">
              <AllQuestions data={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;

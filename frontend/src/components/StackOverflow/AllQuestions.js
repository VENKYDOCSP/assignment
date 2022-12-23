import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { stringAvatar } from "../../utils/Avatar";

function AllQuestions({ data }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  let tags = JSON.parse(data?.tags[0]);
  // console.log();
  return (
    <div class="all-questions">
      <div class="all-questions-container">
        <div class="all-questions-left">
          <div class="all-options">
            <div class="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div class="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div class="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div class="question-answer">
          <Link to={`/question?q=${data?._id}`}>{data.title}</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>{ReactHtmlParser(truncate(data.body, 200))}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>
          <div class="author">
            <small>{data.create_at}</small>
            <div class="auth-details">
              <Avatar {...stringAvatar(data?.user?.displayName)} />
              <p>
                {data?.user?.displayName
                  ? data?.user?.displayName
                  : "Natalie lee"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;

import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import StarsIcon from "@material-ui/icons/Stars";
import WorkIcon from "@material-ui/icons/Work";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div class="sidebar">
      <div class="sidebar-container">
        <div class="sidebar-options">
          <div class="sidebar-option">
            <Link to="/">Home</Link>

            {/* <a href="/">Home</a> */}
          </div>
          <div class="sidebar-option">
            <p>PUBLIC</p>
            <div class="link">
              <div class="link-tag">
                <PublicIcon />
                <Link to="/">Question</Link>

                {/* <a href="/">Question</a> */}
              </div>

              <div class="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div class="sidebar-option">
            <p>COLLECTIVES</p>
            <div class="link">
              <div class="link-tag">
                <StarsIcon />
                <Link to="/">Explore Collectives</Link>

                {/* <a href="/">Explore Collectives</a> */}
              </div>
            </div>
          </div>
          <div class="sidebar-option">
            <p>FIND A JOB</p>
            <div class="link">
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/"
              >
                Jobs
              </Link>
              {/* <a
                style={{
                  margin: "10px 20px",
                }}
                href="/"
              >
                Jobs
              </a> */}
              {/* <a
                style={{
                  marginLeft: "20px",
                }}
                href="/"
              >
                Companies
              </a> */}
              <Link
                style={{
                  marginLeft: "20px",
                }}
                to="/"
              >
                Companies
              </Link>
            </div>
          </div>
          <div class="sidebar-option">
            <p>TEAMS</p>
            <div class="link-tag">
              <WorkIcon />
              <Link to="/">Companies</Link>
              {/* <a href="/">Companies</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

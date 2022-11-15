import React from "react";
import styles from "./statistics.module.css";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <div>
      <p className={styles.stat}>Statistics</p>
      <div className={styles.contribution}>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=vishalmahale11"
          alt="Vishal Mahale"
        />
      </div>
      <div className={styles.github}>
        <GitHubCalendar
          style={{
            border: "1px solid lightgray",
            padding: "20px",
            borderRadius: "3px",
          }}
          username="vishalmahale11"
          year={new Date().getFullYear()}
        />
      </div>
    </div>
  );
};

export default Statistics;

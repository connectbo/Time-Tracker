import React, { useState } from "react";

function Timeline() {
  //   const classes = useStyles();
  const timeline = [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
    "12PM"
  ];

  const processButtonClick = e => {
    const el = document.getElementById(e.target.id);

    if (el.classList.contains("clicked")) {
      setTimeout(() => {
        el.classList.remove("clicked");
        el.textContent = "";
      }, 300);
    } else if (el.classList.contains("added")) {
      el.classList.remove("added");
      el.textContent = "";
    } else if (el.classList.contains("finished")) {
    } else {
      el.classList.add("clicked");
    }
  };

  return (
    <React.Fragment>
      <ul className="list-group">
        {timeline.map(hour => (
          <li
            key={hour}
            className="list-group-item d-flex justify-content-around align-items-center border-0 px-0"
          >
            <div id="time">{hour}</div>
            <div
              className="tasks text-white font-weight-bold"
              id={`${hour}1`}
              onClick={processButtonClick}
            ></div>
            <div
              className="tasks text-white font-weight-bold"
              id={`${hour}2`}
              onClick={processButtonClick}
            ></div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Timeline;

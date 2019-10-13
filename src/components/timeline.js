import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Badge } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     borderRadius: "10px",
//     border: "2px solid #64B5F6",
//     padding: "10px"
//   },
//   time_card: {
//     margin: "10px 12px",
//     minWidth: 130,
//     minHeight: 30,
//     textAlign: "center"
//   },
//   line_container: {
//     display: "flex"
//   },
//   time_label: {
//     width: "70px",
//     margin: "10px 12px"
//   }
// }));

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
    console.log(e.target);
  };

  return (
    // <div className={classes.root}>
    //   {timeline.map(hour => (
    //     <div className={classes.line_container}>
    //       <p className={classes.time_label}>{hour}</p>
    //       <Card className={classes.time_card} onClick={processButtonClick}>
    //         Testing
    //       </Card>
    //       <Card className={classes.time_card} onClick={processButtonClick}>
    //         Testing2
    //       </Card>
    //     </div>
    //   ))}
    // </div>
    <React.Fragment>
      <ul className="list-group">
        {timeline.map(hour => (
          <li
            key={hour}
            className="list-group-item d-flex justify-content-around align-items-center border-0 px-0"
          >
            <span id="time">{hour}</span>
            <div className="tasks" onClick={processButtonClick}></div>
            <div className="tasks" onClick={processButtonClick}></div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Timeline;

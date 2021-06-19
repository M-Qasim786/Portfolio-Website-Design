import React from "react";

const Progress = (props) => {
  return (
    <>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="25"
          style={{ width: "90%" }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.percentage}
        </div>
      </div>
    </>
  );
};

export default Progress;

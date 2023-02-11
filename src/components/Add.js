import React from "react";

const Add = ({ isClicked, onShow }) => {
  return (
    <div className="circular" onClick={isClicked}>
      {onShow ? (
        <i className="fa-solid fa-xmark"></i>
      ) : (
        <i className="fa-solid fa-plus"> </i>
      )}
    </div>
  );
};

export default Add;

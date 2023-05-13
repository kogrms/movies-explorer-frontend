import React from "react";

function Checkbox() {
  let isChecked = true;

  return (
    <div className="checkbox-container">
      <div
        className="checkbox"
        >
        <div className={`checkbox__button ${isChecked ? "checked" : ""}`} />
      </div>
      <p className="checkbox-group__title">Короткометражки</p>
    </div>
  );
}

export default Checkbox;

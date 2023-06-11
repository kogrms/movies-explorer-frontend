import React from "react";

function Checkbox({ isChecked, onCheckboxClick }) {

  const handleCheckboxClick = () => {
    onCheckboxClick();
  };

  return (
    <div className="checkbox-container">
      <div
        className="checkbox"
        onClick={handleCheckboxClick}
      >
        <div className={`checkbox__button ${isChecked ? "checked" : ""}`} />
      </div>
      <p className="checkbox-title">Короткометражки</p>
    </div>
  );
}

export default Checkbox;

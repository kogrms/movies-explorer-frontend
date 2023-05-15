import React, { useState } from "react";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="checkbox-container">
      <div
        className="checkbox"
        onClick={handleClick}
      >
        <div className={`checkbox__button ${isChecked ? "checked" : ""}`} />
      </div>
      <p className="checkbox-title">Короткометражки</p>
    </div>
  );
}

export default Checkbox;

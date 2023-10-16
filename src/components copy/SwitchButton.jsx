import React from "react";

const SwitchButton = ({ onClick }) => {
  return (
    <label class="switch">
      <input type="checkbox" onClick={onClick} />
      <span class="slider round"></span>
    </label>
  );
};

export default SwitchButton;

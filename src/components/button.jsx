import React from "react";

function Button(props) {
  const {
    themeChange,
    changer: { theme, changeText, bgColor, textColor, btnColor }
  } = props;

  return (
    <div className={`mt-5 ${bgColor} ${textColor}`}>
      <h1 className="text-center">Light-Dark Mode Changer</h1>
      <div class="text-center mt-5">
        <button
          className={`btn text-center btn-lg ${btnColor}`}
          onClick={themeChange}
        >
          {changeText}
        </button>
      </div>
    </div>
  );
}

export default Button;

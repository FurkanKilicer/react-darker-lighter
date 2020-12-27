import React from "react";

export default function Footer(props) {
  const { bgColor, textColor, btnColor } = props.changer;
  return (
    <footer
      className={`bg-light text-center text-lg-start jumbotron mt-5 shadow-lg ${bgColor} ${textColor}`}
    >
      <div className={`text-center p-3 border-light ${bgColor} ${textColor}`}>
        Coded By Furkan Kılıçer
      </div>
    </footer>
  );
}

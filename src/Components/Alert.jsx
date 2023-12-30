import React, { useEffect } from "react";
import "./Alert.css";
const Alert = ({ message, type, setalert }) => {
  useEffect(() => {
    if (type) {
      setTimeout(() => {
        setalert({ type: null, message: "" });
      }, 3000);
    }
  }, );
  return (
    
    <div className={`alert ${!type?'hidden':''}`}>
      <span className="alertType">{type}:</span>&nbsp;&nbsp;
      <span className="alertMessage">{message}</span>
    </div>
  );
};

export default Alert;

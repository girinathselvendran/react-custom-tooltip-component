import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ infoText, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-container">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      <div className={`tooltip ${showTooltip ? "open" : ""}`}>
        {infoText}
        <div className="arrow" />
      </div>
    </div>
  );
};

export default Tooltip;

import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = ({ tooltipData }) => {
  return (
    <div
      className="tooltip"
      dangerouslySetInnerHTML={{ __html: tooltipData }}
    ></div>
  );
};

export default Tooltip;

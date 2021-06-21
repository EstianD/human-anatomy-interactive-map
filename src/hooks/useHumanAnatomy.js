import React, { useState } from "react";

const useHumanAnatomy = () => {
  const [onHover, setOnHover] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState("left");
  const [tooltipData, setTooltipData] = useState("");
  // Mouse over event for body parts
  const enterArea = (area) => {
    console.log("AREA: ", area);
    setOnHover(true);
    setTooltipPosition(area.tooltip);
    setTooltipData(area.description);
  };

  const leaveArea = () => {
    setOnHover(false);
    console.log("LEAVE");
  };

  return { enterArea, leaveArea, onHover, tooltipPosition, tooltipData };
};

export default useHumanAnatomy;

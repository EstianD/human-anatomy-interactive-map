import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = ({ onHover }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(onHover);
  }, [onHover]);

  return (
    <div>
      {isShowing && (
        <div>
          <p data-tip="hello world">Tooltip</p>
          <ReactTooltip />
        </div>
      )}
    </div>
  );
};

export default Tooltip;

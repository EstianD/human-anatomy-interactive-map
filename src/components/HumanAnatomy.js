import React, { useEffect } from "react";
import ImageMapper from "react-image-mapper";
import ReactTooltip from "react-tooltip";
import humanBodyGray from "../images/human-anatomy-gray.png";
// Import human anatomy hook
import useHumanAnatomy from "../hooks/useHumanAnatomy";
import { usePopperTooltip } from "react-popper-tooltip";

import { MapPoints } from "../MapPoints";

// Import components
import Tooltip from "./Tooltip";

const HumanAnatomy = () => {
  const { enterArea, leaveArea, onHover, tooltipPosition, tooltipData } =
    useHumanAnatomy();
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  console.log(MapPoints());
  return (
    <div className="landing-page">
      {/* {onHover && <Tooltip />} */}

      <div className="tooltip-container">
        {onHover && tooltipPosition === "left" && (
          <Tooltip tooltipData={tooltipData} />
        )}
      </div>
      <div
        className="human-anatomy-container"
        data-tip
        data-for="human-body"
        ref={setTriggerRef}
      >
        <ImageMapper
          src={humanBodyGray}
          map={MapPoints()}
          width={587}
          imgWidth={587}
          // onLoad={() => this.load()}
          onMouseEnter={(area) => enterArea(area)}
          onMouseLeave={(area) => leaveArea(area)}
        />
      </div>
      <div className="tooltip-container">
        {onHover && tooltipPosition === "right" && (
          <Tooltip tooltipData={tooltipData} />
        )}
      </div>
    </div>
  );
};

export default HumanAnatomy;

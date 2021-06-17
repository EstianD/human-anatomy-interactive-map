import React, { useEffect } from "react";
import ImageMapper from "react-image-mapper";
import ReactTooltip from "react-tooltip";
import humanBodyGray from "../images/human-anatomy-gray.png";
// Import human anatomy hook
import useHumanAnatomy from "../hooks/useHumanAnatomy";
import { usePopperTooltip } from "react-popper-tooltip";

import { MapPoints, tooltipData } from "../MapPoints";

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
    <div>
      {/* <Tooltip onHover={onHover} /> */}
      {onHover && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
          Tooltip
        </div>
      )}

      <div
        className="human-anatomy-container"
        data-tip
        data-for="human-body"
        ref={setTriggerRef}
      >
        <ImageMapper
          src={humanBodyGray}
          map={MapPoints()}
          // width={500}
          // onLoad={() => this.load()}
          onMouseEnter={(area) => enterArea(area)}
          onMouseLeave={(area) => leaveArea(area)}
        />
      </div>
    </div>
  );
};

export default HumanAnatomy;

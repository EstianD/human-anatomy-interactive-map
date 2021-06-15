import React from "react";
import ImageMapper from "react-image-mapper";
import humanBodyGray from "../images/human-anatomy-gray.png";
// Import human anatomy hook
import useHumanAnatomy from "../hooks/useHumanAnatomy";

import { MapPoints } from "../MapPoints";

const HumanAnatomy = () => {
  const { enterArea } = useHumanAnatomy();

  console.log(MapPoints());
  return (
    <div>
      <ImageMapper
        src={humanBodyGray}
        map={MapPoints()}
        // width={500}
        // onLoad={() => this.load()}
        onMouseEnter={(area) => enterArea(area)}
      />
    </div>
  );
};

export default HumanAnatomy;

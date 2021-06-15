import React from "react";

const useHumanAnatomy = () => {
  // Mouse over event for body parts
  const enterArea = (area) => {
    console.log("AREA: ", area);
  };

  return { enterArea };
};

export default useHumanAnatomy;

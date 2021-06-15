import "./App.css";
import ImageMapper from "react-image-mapper";
import humanBodyGray from "./images/human-anatomy-gray.png";
import humanBodyColor from "./images/human-anatomy-color.png";

const HIGHLIGHT_COLOR = "rgba(136, 8, 8, 0.3)";
const BORDER_COLOR = "rgba(136, 8, 8, 0.6)";
const BORDER_WIDTH = 1;

const MAP = {
  name: "human-map",
  areas: [
    {
      name: "1",
      shape: "poly",
      coords: [
        132, 138, 117, 160, 119, 180, 132, 193, 150, 190, 165, 187, 183, 188,
        198, 190, 208, 182, 213, 166, 211, 157, 192, 134, 179, 133, 165, 138,
        149, 132,
      ],
      fillColor: HIGHLIGHT_COLOR,
      strokeColor: BORDER_COLOR,
      lineWidth: BORDER_WIDTH,
    },
  ],
};

function App() {
  // Mouse over event for body parts
  const enterArea = (area) => {
    console.log("AREA: ", area);
  };

  return (
    <div className="App">
      <ImageMapper
        src={humanBodyGray}
        map={MAP}
        // width={500}
        // onLoad={() => this.load()}
        onMouseEnter={(area) => enterArea(area)}
      />
    </div>
  );
}

export default App;

import "./color-generator.css";

const ColorGenerator = () => {
  const handleHslGen = () => {
    console.log("hsl function");
  };
  const handleHexGen = () => {
    console.log("hex function");
  };
  const handleRgbGen = () => {
    console.log("rgb function");
  };

  const handleClick = (type) => {
    switch (type) {
      case "hsl": {
        handleHslGen();
        break;
      }
      case "hex": {
        handleHexGen();
        break;
      }
      case "rgb": {
        handleRgbGen();
        break;
      }
    }
  };

  return (
    <div className="color-container">
      <div onClick={() => handleClick("hsl")} className="hsl-color">
        <p>hsl value</p>
      </div>
      <div onClick={() => handleClick("hex")} className="hex-color">
        <p>hex value</p>
      </div>
      <div onClick={() => handleClick("rgb")} className="rgb-color">
        <p>rgb value</p>
      </div>
    </div>
  );
};

export default ColorGenerator;

import { useEffect, useState } from "react";
import "./color-generator.css";

const randomInteger = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const handleRgbGen = () => {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
};

const handleHexGen = () => {
  let [r, g, b] = handleRgbGen();
  let hr = r.toString(16).padStart(2, "0");
  let hg = g.toString(16).padStart(2, "0");
  let hb = b.toString(16).padStart(2, "0");
  return "#" + hr + hg + hb;
};
const handleHslGen = () => {
  let h = randomInteger(360);
  let s = randomInteger(100);
  let l = randomInteger(100);
  return [h, s, l];
};

const ColorGenerator = () => {
  const [rgbColor, setRgbColor] = useState(null);
  const [hexColor, setHexColor] = useState(null);
  const [hslColor, setHslColor] = useState(null);

  console.log(rgbColor, hexColor, hslColor);

  const handleClick = (type) => {
    switch (type) {
      case "hsl": {
        let [h, s, l] = handleHslGen();
        setHslColor(`hsl(${h}, ${s}%, ${l}%)`);
        break;
      }
      case "hex": {
        let color = handleHexGen();
        setHexColor(color);
        break;
      }
      case "rgb": {
        // set here
        let [r, g, b] = handleRgbGen();
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
        break;
      }
      case "rand": {
        let [r, g, b] = handleRgbGen();

        setRgbColor(`rgb(${r}, ${g}, ${b})`);
        let color = handleHexGen();
        setHexColor(color);
        let [h, s, l] = handleHslGen();
        setHslColor(`hsl(${h}, ${s}%, ${l}%)`);
        break;
      }
    }
  };

  // runs once on load setting inital values through generation instead on setting default in the use state hook;
  useEffect(() => {
    handleClick("rgb");
    handleClick("hsl");
    handleClick("hex");

    return () => {
      setRgbColor(null);
      setHexColor(null);
      setHslColor(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="color-container">
      <button onClick={() => handleClick("rand")} className="all-btn">
        Randomize
      </button>
      <div
        style={{ backgroundColor: hslColor }}
        onClick={() => handleClick("hsl")}
        className="hsl-color"
      >
        <p>HSL: {hslColor}</p>
      </div>
      <div
        style={{ backgroundColor: hexColor }}
        onClick={() => handleClick("hex")}
        className="hex-color"
      >
        <p>Hex: {hexColor}</p>
      </div>
      <div
        style={{ backgroundColor: rgbColor }}
        onClick={() => handleClick("rgb")}
        className="rgb-color"
      >
        <p>RGB: {rgbColor}</p>
      </div>
    </div>
  );
};

export default ColorGenerator;

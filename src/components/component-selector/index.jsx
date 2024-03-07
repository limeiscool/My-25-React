"use Client";
import { useState } from "react";
import "./component-selector.css";

const componentOptions = [
  {
    name: "Test Div 1",
    value: "test-div-1",
  },
  {
    name: "Test Div 2",
    value: "test-div-2",
  },
] || [{ name: "no components" }];

function ComponentSelector() {
  const [value, setValue] = useState("test-div-1");
  const activeComponent = value;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(activeComponent);
  return (
    <div className="component-selector-container">
      <label htmlFor="dropdown">Choose a component:</label>

      <select
        value={value}
        onChange={handleChange}
        name="dropdown"
        id="dropdown"
      >
        {componentOptions &&
          componentOptions.map((comp) => {
            return (
              <option key={comp.value} value={comp.value}>
                {comp.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default ComponentSelector;

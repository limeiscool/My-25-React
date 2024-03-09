import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./component-selector.css";

function ComponentSelector({ onDropChange, componentOptions }) {
  const [value, setValue] = useState(componentOptions[0].value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onDropChange(value);
  }, [onDropChange, value]);

  return (
    <div className="component-selector-container">
      <label htmlFor="dropdown">Choose a component: </label>

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
ComponentSelector.propTypes = {
  onDropChange: PropTypes.func,
  componentOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: String,
      value: String,
    })
  ),
};

export default ComponentSelector;

import { useState } from "react";
import "./App.css";
import ComponentSelector from "./components/component-selector";
import { componentOptions } from "./Controller/componentOptions";

function App() {
  const [activeComponent, setActiveComponent] = useState();

  const handleChange = (active) => {
    setActiveComponent(active);
  };

  console.log(activeComponent);

  return (
    <>
      <ComponentSelector
        onDropChange={handleChange}
        componentOptions={componentOptions}
      />
      {componentOptions &&
        componentOptions.map((comp) =>
          comp.value === activeComponent ? comp.component : null
        )}
    </>
  );
}

export default App;

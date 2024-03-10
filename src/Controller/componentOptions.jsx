import Accordian from "../components/accordian";
import ColorGenerator from "../components/color-generator";
import TestDiv1 from "../components/test-div-1";
import TestDiv2 from "../components/test-div-2";

export const componentOptions = [
  {
    name: "Test Div 1",
    value: "test-div-1",
    component: <TestDiv1 />,
  },
  {
    name: "Test Div 2",
    value: "test-div-2",
    component: <TestDiv2 />,
  },
  {
    name: "Accordian",
    value: "accoridian",
    component: <Accordian />,
  },
  {
    name: "Color Generator",
    value: "color-generator",
    component: <ColorGenerator />,
  },
];

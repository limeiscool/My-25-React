import { useState } from "react";
import data from "./data";
import { FaPlus } from "react-icons/fa6";
import "./accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [isMultiSelect, setIsMultiSelect] = useState(false);

  const handleClick = (i) => {
    if (isMultiSelect) {
      let copy = [...multiSelected];
      const isSelected = copy.includes(i);
      if (isSelected) {
        copy.splice(copy.indexOf(i), 1);
      } else {
        copy.push(i);
      }
      setMultiSelected(copy);
    } else {
      setSelected(selected === i ? null : i);
    }
  };
  const enableMultiSelect = () => {
    if (!isMultiSelect) {
      setIsMultiSelect(!isMultiSelect);
      setMultiSelected(!selected ? [] : [selected]);
    } else {
      setIsMultiSelect(!isMultiSelect);
      setMultiSelected([]);
      setSelected(null);
    }
  };

  return (
    <div className="accordian-container">
      <button onClick={enableMultiSelect}>Multi-Select</button>
      <div className="accoridan">
        {data.map((obj, i) => {
          return (
            <div key={i} className="question">
              <div className="title" onClick={() => handleClick(i)}>
                <h3>{obj.question}</h3>
                <span className="plus">
                  <FaPlus />
                </span>
              </div>
              {isMultiSelect
                ? multiSelected.includes(i) &&
                  (typeof data[i].answer === "string" ? (
                    <div className="answer">
                      <p>{obj.answer}</p>
                    </div>
                  ) : (
                    <div className="answer">
                      {data[i].answer.map((a, i) => {
                        return <p key={i}>{a}</p>;
                      })}
                    </div>
                  ))
                : selected === i &&
                  (typeof data[i].answer === "string" ? (
                    <div className="answer">
                      <p>{obj.answer}</p>
                    </div>
                  ) : (
                    <div className="answer">
                      {data[i].answer.map((a, i) => {
                        return <p key={i}>{a}</p>;
                      })}
                    </div>
                  ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordian;

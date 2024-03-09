import { useState } from "react";
import data from "./data";
import { FaPlus } from "react-icons/fa6";
import "./accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleClick = (i) => {
    setSelected(selected === i ? null : i);
  };

  console.log(selected);

  return (
    <div className="accordian-container">
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
              {selected === i ? (
                typeof data[i].answer === "string" ? (
                  <div className="answer">
                    <p>{obj.answer}</p>
                  </div>
                ) : (
                  <div className="answer">
                    {data[i].answer.map((a, i) => {
                      return <p key={i}>{a}</p>;
                    })}
                  </div>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordian;

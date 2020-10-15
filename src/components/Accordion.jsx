import React, { useState, useRef } from "react";
import Checkbox from "./Checkbox";

import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    console.log("checkedItems: ", checkedItems);
  };

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <>
      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <Chevron className={`${setRotate}`} width={15} fill={"#fff"} />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <div className="accordion__text">
            <ul>
              {props.content.map((item) => (
                <li key={item.key}>
                  <Checkbox
                    name={item.name}
                    checked={checkedItems[item.name]}
                    onChange={handleChange}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
}

export default Accordion;

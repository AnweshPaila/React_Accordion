import React, { useState, useRef } from "react";

import Checkbox from "./Checkbox";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion(props) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    // console.log("checkedItems: ", checkedItems);
  };

  const content = useRef(null);

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <>
      <div className="accordion__section">
        <button className={`accordion ${active}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <Chevron className={`${rotate}`} width={15} fill={"#fff"} />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${height}` }}
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

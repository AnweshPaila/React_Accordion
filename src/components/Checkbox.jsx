import React from "react";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  //   console.log("Checkbox: ", name, checked);

  return (
    <>
      <label className="custom-control custom-checkbox">
        <input
          type={type}
          className="custom-control-input"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="custom-control-indicator"></span>
        <span className="custom-control-label">{name}</span>
      </label>
      {/* <div className="form-check">
        <input type={type} className="form-check-input" />
        <label className="form-check-label" htmlFor={name}>
          {name}
        </label>
      </div> */}
    </>
  );
};

export default Checkbox;

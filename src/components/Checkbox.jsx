import React from "react";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  //   console.log("Checkbox: ", name, checked);

  return (
    <>
      <div className="form-check">
        <input
          type={type}
          className="form-check-input"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor={name}>
          {name}
        </label>
      </div>
    </>
  );
};

export default Checkbox;

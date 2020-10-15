import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const checkboxes = [
    {
      name: "check-box-1",
      key: "checkBox1",
      label: "Check Box 1",
    },
    {
      name: "check-box-2",
      key: "checkBox2",
      label: "Check Box 2",
    },
  ];

  const checkboxes2 = [
    {
      name: "check-box-1",
      key: "checkBox1",
      label: "Check Box 1",
    },
    {
      name: "check-box-2",
      key: "checkBox2",
      label: "Check Box 2",
    },
  ];
  return (
    <>
      <div className="container row col-sm-12 mt-3">
        <div className="col-sm-3">
          <Accordion title="Categories" content={checkboxes} />
          <Accordion title="Categories2" content={checkboxes2} />
        </div>
      </div>
    </>
  );
};

export default App;

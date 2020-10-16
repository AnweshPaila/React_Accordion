import React from "react";
import Accordion from "./components/Accordion";
import Card from "./components/Card";

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
      <div className="container row col-sm-12 mt-3 ml-2">
        <div className="col-sm-3" style={{ backgroundColor: "#d6dedd" }}>
          <Accordion title="Categories" content={checkboxes} />
          <Accordion title="Categories2" content={checkboxes2} />
        </div>
        <div className="col-sm-9 row">
          <Card
            profileSrc="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
            socailsrc="https://randomuser.me/api/portraits/men/64.jpg"
            cardTitle="Micheal Reph"
            cardText="Vice President"
          />
          <Card
            profileSrc="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
            socailsrc="https://randomuser.me/api/portraits/men/64.jpg"
            cardTitle="Micheal Reph"
            cardText="Vice President"
          />
          <Card
            profileSrc="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
            socailsrc="https://randomuser.me/api/portraits/men/64.jpg"
            cardTitle="Micheal Reph"
            cardText="Vice President"
          />
        </div>
      </div>
    </>
  );
};

export default App;

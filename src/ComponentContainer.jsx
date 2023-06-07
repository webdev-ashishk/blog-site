import React from "react";

function Container() {
  return (
    <div className="containerr">
      <img
        src="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        className="cImage"
        alt=""
      />
      <h2>NitinK</h2>
    </div>
  );
}

const ComponentContainer = () => {
  return (
    <div className="cmpContainer">
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
    </div>
  );
};

export default ComponentContainer;

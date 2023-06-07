import React from "react";

function Container({ image, title, desc }) {
  return (
    <div className="containerr">
      <img src={image} alt="" className="cImage" />
      <h2>{title}</h2>
      <i>{desc}</i>
    </div>
  );
}

const ComponentContainer = () => {
  return (
    <div className="cmpContainer">
      <Container
        image="https://upload.wikimedia.org/wikipedia/commons/b/bc/The_Prime_Minister%2C_Shri_Narendra_Modi_planting_sapling_to_mark_the_Commencement_of_Massive_Tree_Plantation_Programme%2C_at_Kalaivanar_Arangam%2C_in_Chennai_%281%29.jpg"
        title="Narendar Modi"
        desc="this is description part "
      />
      <Container
        image="https://cdn.mainichi.jp/vol1/2020/07/05/20200705p2g00m0in066000p/8.jpg?1"
        title="Adity Nath Yogi"
        desc="this is description part "
      />
      <Container
        image="https://static.pib.gov.in/WriteReadData/userfiles/image/image001YE25.jpg"
        title="amit"
        desc="this is description part "
      />
      <Container
        image="https://imagevars.gulfnews.com/2022/04/22/tree-plants-1650637367935_18051a76a8a_large.jpg"
        title="NitinK"
        desc="this is description part "
      />
      <Container
        image="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        title="NitinK"
        desc="this is description part "
      />
      <Container
        image="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        title="NitinK"
        desc="this is description part "
      />
      <Container
        image="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        title="NitinK"
        desc="this is description part "
      />
      <Container
        image="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        title="NitinK"
        desc="this is description part "
      />
      <Container
        image="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        title="NitinK"
        desc="this is description part "
      />
      <Container
        image="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        title="NitinK"
        desc="this is description part "
      />
      <Container
        image="https://st2.depositphotos.com/2931363/8376/i/950/depositphotos_83766196-stock-photo-young-man-planting-tree-in.jpg"
        title="NitinK"
        desc="this is description part "
      />
    </div>
  );
};

export default ComponentContainer;

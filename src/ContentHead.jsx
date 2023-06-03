import React from "react";

const ContentHeader = ({ url, txt }) => {
  return (
    <div className="content-header-cart">
      <img src={url} alt="" className="content-header-image" />
      <h3>{txt}</h3>
    </div>
  );
};

const ContentHead = () => {
  return (
    <div className="content-head-container">
      <ContentHeader
        url="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
        txt="ashish K"
      />
      <ContentHeader
        url="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        txt="ashish K"
      />
      <ContentHeader
        url="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
        txt="ashish K"
      />
    </div>
  );
};

export default ContentHead;

import React from "react";

const ContentHeader = ({ url, txt }) => {
  return (
    <>
      <img src={url} alt="" className="content-header-image" />
      <h3>{txt}</h3>
    </>
  );
};

const ContentHead = () => {
  return (
    <div className="content-header">
      <ContentHeader
        url="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
        txt="ashish K"
      />
    </div>
  );
};

export default ContentHead;

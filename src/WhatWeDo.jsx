import { Outlet } from "react-router-dom";
function WhatWeDo() {
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: "green",
            textAlign: "center",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          What we do for the Wold@!!!!!
        </h1>
      </div>
      <Outlet />
    </>
  );
}

export default WhatWeDo;

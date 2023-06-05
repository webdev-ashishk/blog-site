import { Outlet } from "react-router-dom";
import BestTime from "./BestTime";
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
      <BestTime />
      <Outlet />
    </>
  );
}

export default WhatWeDo;

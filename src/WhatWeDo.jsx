import { Outlet } from "react-router-dom";
import BestTime from "./BestTime";
import Footer from "./Footer";
function WhatWeDo() {
  return (
    <>
      <BestTime />
      <Footer />
      <Outlet />
    </>
  );
}

export default WhatWeDo;

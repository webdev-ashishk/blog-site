import { Outlet } from "react-router-dom";
import BestTime from "./BestTime";
import Footer from "./Footer";
import TextOnImage from "./TextOnImage";
import ComponentContainer from "./ComponentContainer";
function WhatWeDo() {
  return (
    <>
      <TextOnImage />
      <ComponentContainer />
      <BestTime />
      <Footer />

      <Outlet />
    </>
  );
}

export default WhatWeDo;

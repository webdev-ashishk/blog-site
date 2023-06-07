import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Member from "./Member";
function JoinCart({ image }) {
  const navigate = useNavigate();

  function gotoMember() {
    navigate("./Member");
  }
  return (
    <>
      <div className="join-cart" id="joinCart">
        <img src={image} className="join-image" alt="" />
        <h2>heading of join cart</h2>
        <i>this is description</i>
        <button className="jbtn" onClick={gotoMember}>
          Join Now
        </button>
      </div>
      {/* <Outlet /> */}
    </>
  );
}

const JoinUS = () => {
  return (
    <div className="joinContainer" id="joinContainer">
      <JoinCart image="https://media.istockphoto.com/id/183060490/photo/group-with-hands-together.jpg?s=612x612&w=0&k=20&c=kvA_rkY54ZUi2uPbqN9-XZin613DtqC_ac21r-xA40c=" />
      <JoinCart image="https://media.istockphoto.com/id/183060490/photo/group-with-hands-together.jpg?s=612x612&w=0&k=20&c=kvA_rkY54ZUi2uPbqN9-XZin613DtqC_ac21r-xA40c=" />
      <JoinCart image="https://media.istockphoto.com/id/183060490/photo/group-with-hands-together.jpg?s=612x612&w=0&k=20&c=kvA_rkY54ZUi2uPbqN9-XZin613DtqC_ac21r-xA40c=" />
      <Outlet />
    </div>
  );
};

export default JoinUS;

import React from "react";
import { useNavigate } from "react-router-dom";
function JoinCart({ image, btnName }) {
  const navigate = useNavigate();

  function gotoMember() {
    navigate("/member");
  }
  return (
    <>
      <div className="join-cart" id="joinCart">
        <img src={image} className="join-image" alt="" />
        <h2>heading of join cart</h2>
        <i>this is description</i>

        <button className="jbtn" onClick={gotoMember}>
          {btnName}
        </button>
      </div>
    </>
  );
}

const JoinUS = () => {
  return (
    <>
      <div className="parent">
        <h1 className="parent-para">
          <span>Join US</span>
        </h1>
      </div>
      <div className="joinContainer" id="joinContainer">
        <JoinCart
          image="https://media.istockphoto.com/id/183060490/photo/group-with-hands-together.jpg?s=612x612&w=0&k=20&c=kvA_rkY54ZUi2uPbqN9-XZin613DtqC_ac21r-xA40c="
          btnName="Join-Now"
        />
        <JoinCart image="https://images.news18.com/ibnlive/uploads/2019/01/whatsapp-logo.jpg" />
        <JoinCart image="https://www.savegreen.in/savegreen/images/resource/volunter-add-company.png" />
        <JoinCart image="https://www.savegreen.in/savegreen/images/resource/corporate-volunteer.png" />
        <JoinCart
          image="https://www.savegreen.in/savegreen/images/resource/internship.png"
          btnName="Readme.."
        />
      </div>
    </>
  );
};

export default JoinUS;

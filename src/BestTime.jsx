import React from "react";
import { useNavigate } from "react-router-dom";
const BestTime = () => {
  const navigate = useNavigate();

  function gotoDonate() {
    navigate("/Donate");
  }
  function gotoJoin() {
    navigate("/JoinUS");
  }
  return (
    <>
      <div className="container">
        <img
          src="https://t3.ftcdn.net/jpg/04/32/80/52/360_F_432805244_DBdoUgXB7e6LKe1xO3paAlTx3NLYnNPq.jpg"
          alt="Snow"
          width="100%"
          height="400px"
        />
        <div className="centered">
          <p>
            Best Time to plant a tree <span>now</span>
          </p>
          <div className="btn-container">
            <button id="btn" onClick={gotoDonate}>
              Donate Now
            </button>
            <button id="btn" onClick={gotoJoin}>
              Join-US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestTime;

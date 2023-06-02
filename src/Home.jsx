import { useNavigate } from "react-router-dom";
import ContentHead from "./ContentHead";
function Home() {
  const id = "101";
  const navigate = useNavigate();
  function gotoWelcome() {
    navigate("/welcome", { state: { id: id } });
  }
  return (
    <>
      <div className="home">
        <div className="inside-video">
          <h1>Welcome to Awesome place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            rerum.
          </p>
          <div className="btn">
            <button className="btn1">GET STARTED</button>
            <button className="btn2">WATCH TRAILER</button>
          </div>
        </div>
        <div className="outsite-video">
          <ContentHead />
        </div>
      </div>
    </>
  );
}
export default Home;

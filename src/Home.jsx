import { useNavigate } from "react-router-dom";
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illo itaque a! Tempora, suscipit ratione. Possimus soluta sunt
            accusantium eum? Accusamus fugit recusandae dolor earum? Sequi porro
            nihil deserunt sint omnis a! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Reiciendis, quia nisi optio repudiandae nobis
            similique rerum obcaecati laboriosam ex magni enim eveniet molestiae
            doloremque fugit libero corporis ut nesciunt ab accusantium. Nemo
            animi et quis perferendis dicta optio voluptas iusto voluptatum
            debitis, ullam laborum dolor qui, aliquid enim quam quibusdam
            impedit totam unde dolorum praesentium atque. Est amet possimus
            architecto, adipisci fugiat facilis aut facere voluptas fugit quis
            deserunt ad accusamus placeat recusandae laudantium pariatur
            corrupti distinctio incidunt? Perferendis odio quibusdam nostrum
            animi amet ipsam optio expedita autem voluptates et illo, quos,
            eligendi sapiente aut eius! Id error cupiditate veniam itaque,
            porro, amet tenetur enim ad officia ex corrupti nostrum? Dolorum
            perspiciatis minima debitis quae odio possimus fugit ullam
            consequatur. Eius esse dolore velit laudantium explicabo nobis quis
            modi omnis ad. Ullam ex reprehenderit sint earum aspernatur neque
            optio nisi eum provident veniam at voluptate inventore aperiam,
            minus expedita magnam sed doloribus, id pariatur exercitationem
            tenetur, dolor voluptatum! Tempora tempore quis delectus illo
            quaerat natus expedita quam at vel sint explicabo consequuntur
            similique quod sunt debitis repudiandae aliquid beatae omnis
            asperiores adipisci saepe laudantium, atque, eaque minima! Culpa
            eius repudiandae, est blanditiis quibusdam eum ad ipsum alias
            commodi veritatis doloremque!
          </p>
        </div>
      </div>
      <button
        onClick={gotoWelcome}
        style={{
          color: "red",
          fontSize: "3rem",
        }}
      >
        goto-welcome-page
      </button>
    </>
  );
}
export default Home;

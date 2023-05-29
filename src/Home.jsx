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
        <h2>Welcome to Awesome place</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          sapiente deleniti sed nihil cum id magni neque odit architecto placeat
          hic blanditiis doloribus, voluptas dicta veniam minima incidunt
          ducimus nesciunt facere necessitatibus porro! Quam maiores quas itaque
          suscipit velit voluptatem doloremque impedit, labore animi mollitia
          officia deleniti alias perspiciatis id nostrum reprehenderit aliquid
          numquam odio sit. Assumenda, nemo aperiam vel cumque tempore totam
          cupiditate rerum quidem? Alias corrupti aliquid maxime assumenda magni
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          illo itaque a! Tempora, suscipit ratione. Possimus soluta sunt
          accusantium eum? Accusamus fugit recusandae dolor earum? Sequi porro
          amet quisquam quae recusandae est placeat, dicta rem id atque vero
          veritatis dolore? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit rem aliquid, pariatur molestiae dicta eveniet
          similique, ullam cupiditate incidunt quidem quis doloremque et fugit
          quos vel temporibus a ex? Assumenda debitis vitae sapiente! Magni
          earum laboriosam illo veniam, necessitatibus quisquam ad
          exercitationem soluta quis explicabo. Debitis, magnam, exercitationem
          nam reprehenderit tempore temporibus vitae in aut at nemo dolor
          laudantium nostrum corrupti rem molestias reiciendis et deserunt earum
          quaerat aperiam? Deleniti tempora similique iusto natus totam
          consequuntur incidunt, distinctio nulla neque quae accusamus ullam,
          mollitia error impedit fugit autem exercitationem harum nihil soluta
          nemo commodi, delectus eos voluptatem? Sit quod quo atque aspernatur
          cupiditate nam totam porro delectus hic deleniti! Suscipit deleniti
          corporis quasi non accusantium animi, ipsam porro autem. Ipsa,
          blanditiis? Omnis perspiciatis, hic autem sapiente officia perferendis
          praesentium mollitia rem quas minima, dolorum voluptatem itaque! Ea
          voluptate asperiores facere dolorum, quas dicta dolor deleniti
          architecto, eveniet accusantium blanditiis voluptas inventore. Odit
          labore assumenda fugiat, accusantium animi nostrum ipsum iure iste
          veritatis. Quos nam facilis magnam autem magni deserunt distinctio
          voluptate laboriosam, aspernatur at voluptatibus vero itaque similique
          accusantium, minus excepturi. Minima earum, consectetur eum officiis,
          animi ratione laborum excepturi ex incidunt rerum qui sit expedita
          natus recusandae nulla officia reprehenderit nam dolorem quaerat
          ipsum. Voluptates, aliquam, tempora commodi magni officiis dolorum ea
          ex maiores eius eligendi earum saepe cupiditate fuga. Odio quae,
          recusandae aut cupiditate incidunt perspiciatis molestiae aspernatur
          optio, aperiam error quod cum. Ea ab vero ad autem neque vitae eum
          quasi repellat, corporis cupiditate dolorum beatae unde iure modi
          labore vel, inventore placeat voluptates fugiat illum harum sapiente
          voluptas consequuntur omnis. Debitis cumque animi laudantium
          perspiciatis praesentium, dolores molestias, ut repudiandae quod autem
          assumenda totam eum architecto voluptatum excepturi illo odio
          recusandae reiciendis tempora, eos iusto magnam suscipit in. Illum
          quaerat saepe consequatur quos ipsum maxime aliquid ex dolorem
          consectetur nihil tempore aliquam quidem, quae perferendis qui. Ex,
          quis harum non nulla optio maiores nobis in adipisci cumque laborum
          impedit minima molestias doloremque illum dicta. Enim magni in
          accusantium fuga optio mollitia minima consequatur! Architecto numquam
          eaque rerum amet beatae dolorum vel. Autem officiis tempora assumenda
          minus sit. Dolor ab optio necessitatibus atque culpa eius repellendus
          voluptatibus! Veniam dolorum ducimus debitis fuga labore distinctio
          consectetur consequatur officia neque vero aliquam ipsa, soluta, ipsam
          quam, adipisci earum dolor! Excepturi voluptas ex fuga esse! Quidem
          fuga culpa nisi distinctio tempore facilis, ad, assumenda voluptatibus
          nihil deserunt sint omnis a!
        </p>
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

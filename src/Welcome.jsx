import { useLocation } from "react-router-dom";
const Welcome = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        Welcome component Rendered!{location.state.id}
      </h1>
    </>
  );
};

export default Welcome;

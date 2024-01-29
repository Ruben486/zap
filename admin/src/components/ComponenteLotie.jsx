import { Player, Controls } from "@lottiefiles/react-lottie-player";

const ComponenteLotie = (props) => {
  const { lotie} = {...props}
  return (
    <Player
      autoplay
      loop
      src={lotie}
      style={{ height: "300px", width: "300px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};

export default ComponenteLotie;

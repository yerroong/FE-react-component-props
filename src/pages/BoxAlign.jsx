import Circle from "../components/Circle/Circle";
import Box from "../components/Box/Box";


const BoxAlign = () => {
  const circleColorArr = [
  "pink",
  "red",
  "black",
  "gray",
  "green",
  "blue",
  "orange",
  ];

  return (
    <div>
      <Box boxColor="red" text="1"/>
      <Box boxColor="blue" text="2"/>
      <Box boxColor="green" text="3"/>
      <Box boxColor="pink" text="4" />
      <div className="cc">
      {circleColorArr.map((e) => (
        <Circle circleColor={e}></Circle>
      ))}
      </div>
    </div>
  );
};

export default BoxAlign;

import "./Circle.css";

const Circle = (props) => {
    console.log(props);
  return (
    <div
      className="circle"
      style={{
        backgroundColor: props.circleColor || "black",
        // backgroundColor : "black"
      }}
    >
      <p></p>
    </div>
  );
};

export default Circle;
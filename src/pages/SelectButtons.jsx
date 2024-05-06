import Button from "../components/Button/Button";
import { useState } from "react";

const SelectButtons = () => {
  
  const [buttonColor, setButtonColor] = useState("#2563eb"); // 초기값을 파란색으로 설정

  const handleButtonClick = (color) => {
    setButtonColor(color);
  };

  return (
    <div className="selectBtns">
      <Button
        color={buttonColor === "red" ? "red" : "#2563eb"}
        label="Primary"
        onClick={() => handleButtonClick("red")}
      />
      <Button
        color={buttonColor === "yellow" ? "yellow" : "#2563eb"}
        label="Secondary"
        onClick={() => handleButtonClick("yellow")}
      />
      <Button
        color={buttonColor === "blue" ? "blue" : "#2563eb"}
        label="Default"
        onClick={() => handleButtonClick("blue")}
      />
    </div>
  );
};

export default SelectButtons;

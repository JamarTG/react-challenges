import { useEffect, useState } from "react";
import "./TrafficLight.css";

type LightColor = "red" | "green" | "yellow";

const LIGHT_COLORS: LightColor[] = ["red", "yellow", "green"];


const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState<LightColor>("red");
  const [colorDuration, setColorDuration] = useState<number>(4000);


  const getNextActiveColor = (currentActiveColor:LightColor) => {
        if(currentActiveColor === "red") return "yellow";
        if(currentActiveColor === "yellow") return "green";
        return "red";
  }

  const getColorDuration = (color: LightColor) => {
    const RED_DURATION_TIME = 4000;
    const YELLOW_DURATION_TIME = 500;
    const GREEN_DURATION_TIME = 3000;

    if(color === "red") return RED_DURATION_TIME;
    if(color === "yellow") return YELLOW_DURATION_TIME;
    return GREEN_DURATION_TIME;
  }

  useEffect(() => {
    const id = setTimeout(() => {
        const nextActiveColor = getNextActiveColor(activeColor);
        const colorDuration = getColorDuration(nextActiveColor);

        setActiveColor(nextActiveColor);
        setColorDuration(colorDuration)

    },colorDuration)

    return () => clearTimeout(id)

  },[activeColor,colorDuration])

  return (
    <div className="traffic-lights-container">

      <div className="traffic-light-case">
        {LIGHT_COLORS.map((color) => {
          return (
            <div
              className="light"
              style={{ backgroundColor: activeColor === color ? color : "" }}
            ></div>
          );
        })}
      </div>
      <div className="traffic-light-case">
        {LIGHT_COLORS.map((color) => {
          return (
            <div
              className="light"
              style={{ backgroundColor: activeColor === color ? color : "" }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLight;

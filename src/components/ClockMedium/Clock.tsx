import { useEffect, useState } from "react";
import "./Clock.css";

export const Clock = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => clearInterval(id);
  });

  const SECONDS_PER_MINUTE = 60;
  const MINUTES_PER_HOUR = 60;
  const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;

  const secondsElapsed = seconds % SECONDS_PER_MINUTE;
  const minutesElapsed = Math.floor(seconds / SECONDS_PER_MINUTE) % MINUTES_PER_HOUR;
  const hoursElapsed = Math.floor(seconds / SECONDS_PER_HOUR);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  const displaySeconds = formatTime(secondsElapsed);
  const displayMinutes = formatTime(minutesElapsed);
  const displayHours = formatTime(hoursElapsed);

  return (
    <div className="clock-container">
      <h2 className="clock-time">
        {displayHours}:{displayMinutes}:{displaySeconds}
      </h2>
    </div>
  );
};

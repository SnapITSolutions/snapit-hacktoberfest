import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [, setUpdate] = useState(0);

  const eventStart = Date.parse("Sept 30, 2021 24:00:00");
  const currentTime = new Date();
  const timeLeft = eventStart - currentTime;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const mins = Math.floor(timeLeft / (1000 * 60));
  const secs = Math.floor(timeLeft / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="CountDownTimer">
      <div id="displayTime">
        <ul id="labels">
          <li>DAYS</li>
          <li>HOURS</li>
          <li>MINUTES</li>
          <li>SECONDS</li>
        </ul>
        <ul id="numbers">
          <li className="Display">{d} </li>
          <li className="Display">{h} </li>
          <li className="Display">{m} </li>
          <li className="Display">{s} </li>
        </ul>
      </div>
    </div>
  );
};

export default CountdownTimer;

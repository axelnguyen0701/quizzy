import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [seconds, setSeconds] = useState(20);

  function updateTime() {
    if (seconds === 0) {
      //reset
      props.onTimeOut();
      setSeconds(20);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  }

  useEffect(() => {
    // use set timeout and be confident because updateTime will cause rerender
    // rerender mean re call this effect => then it will be similar to how setinterval works
    // but with easy to understand logic
    const token = setTimeout(updateTime, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  });

  return <h1 className="text-muted">Time: {seconds}</h1>;
};

export default Timer;

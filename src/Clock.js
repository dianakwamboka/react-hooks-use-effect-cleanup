import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup(){
      clearInterval(intervalId)
    }
  }, []);

  return <div>{time.toString()}</div>;
}
export default Clock;

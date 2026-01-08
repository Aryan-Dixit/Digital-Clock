import { useEffect, useState } from "react";
import "./Colon.css";

export const DigitalColon = ({ color = "#ef4444" }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let timeoutId;

    const intervalId = setInterval(() => {
      setBlink(true);

      timeoutId = setTimeout(() => {
        setBlink(false);
      }, 200);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`digital-colon ${blink ? "blink" : ""}`}
      style={{
        height: 80,
        width: 20,
      }}
    >
      <span className="dot" style={{ backgroundColor: color }} />
      <span className="dot" style={{ backgroundColor: color }} />
    </div>
  );
};

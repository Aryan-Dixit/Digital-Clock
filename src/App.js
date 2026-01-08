import { useEffect, useState } from "react";
import { DigitalColon } from "./Colon";
import SevenSegment from "./Digit";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };

    update();
    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <SevenSegment value={Number(time.split(":")[0][0])} />
      <SevenSegment value={Number(time.split(":")[0][1])} />
      <DigitalColon blink />
      <SevenSegment value={Number(time.split(":")[1]?.[0])} />
      <SevenSegment value={Number(time.split(":")[1]?.[1])} />
      <DigitalColon blink />
      <SevenSegment value={Number(time.split(":")[2]?.[0])} />
      <SevenSegment value={Number(time.split(":")[2]?.[1])} />
    </div>
  );
}

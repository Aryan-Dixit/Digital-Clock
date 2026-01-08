import "./Digit.css";

const DIGITS = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
};

export default function SevenSegment({ value = 0 }) {
  const segments = DIGITS[value] || DIGITS[0];

  return (
    <div className="seven-seg">
      {segments.map((on, i) => (
        <div key={i} className={`segment s${i} ${on ? "on" : ""}`} />
      ))}
    </div>
  );
}

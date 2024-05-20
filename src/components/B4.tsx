import React, { useState } from "react";

export default function B4() {
  const [process, setProcess] = useState<number>(50);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcess(Number(e.target.value));
  };

  const handleClick = () => {
    console.log(`Tien độ công việc: ${process}%`);
  };

  return (
    <div>
      <p>Tiến độ công việc: {process}%</p>
      <input
        type="range"
        min={0}
        max={100}
        value={process}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

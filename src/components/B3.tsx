import { useState } from "react";

export default function B3() {
  const [date, setDate] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleClick = () => {
    console.log(date);
  };
  return (
    <div>
      <p>Ngày sinh: {date}</p>
      <input type="date" onChange={handleChange} /> <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

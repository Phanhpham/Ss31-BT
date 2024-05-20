import React, { useState } from "react";

export default function B1() {
  const [email, setEmail] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleClick = () => {
    const myEmail = {
      email: email,
    };
    console.log(myEmail);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [submittedColor, setSubmittedColor] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmittedColor(color);
  };

  return (
    <div className="App">
      <h1>Color Input Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedColor && (
        <div>
          <h2>Submitted Color Code:</h2>
          <p>{submittedColor}</p>
        </div>
      )}
    </div>
  );
}

export default App;

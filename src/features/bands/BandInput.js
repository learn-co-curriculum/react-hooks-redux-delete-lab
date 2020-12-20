import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onBandSubmit(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Band</button>
    </form>
  );
}

export default BandInput;

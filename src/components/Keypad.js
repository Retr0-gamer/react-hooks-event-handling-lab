import React from "react";

function Keypad() {
  const handleInputChange = () => {
    console.log("Entering password...");
  };
  return (
    <div>
      <label>Enter Password</label>
      <input type='password' onChange={handleInputChange} />
    </div>
  );
}

export default Keypad;

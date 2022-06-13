import React, { useState } from "react";

export default function ControlledComponent() {
  console.log("ControlledComponent render...");
  const [inputVal, setInputVal] = useState("hello world");
  return (
    <div>
      <p>ControlledComponent</p>
      <p>input value: {inputVal}</p>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
}

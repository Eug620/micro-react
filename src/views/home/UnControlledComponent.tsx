import { Button } from "@arco-design/web-react";
import React, { useRef } from "react";

export default function UnControlledComponent() {
  console.log("UnControlledComponent render...");
  const inputElm: any = useRef(null);
  const handleClick = () => {
    console.log(inputElm.current.value);
  };
  return (
    <div>
      <p>UnControlledComponent</p>
      <input type="text" ref={inputElm} />
      <Button onClick={handleClick}>click</Button>
    </div>
  );
}

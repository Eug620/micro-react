import { Button } from "@arco-design/web-react";
import React, { useContext } from "react";
import { HomeContext, HomeContextInterface } from "./index";

export default function ChildB() {
  console.log("ChildB render...");
  const { num, setNum }: HomeContextInterface = useContext(HomeContext);
  return (
    <>
      <div>ChildB</div>
      {num}
      <Button onClick={() => setNum(num + 1)}>click</Button>
    </>
  );
}

import React from "react";
import { HomeContext, HomeContextInterface } from "./index";
import { Button } from "@arco-design/web-react";

export default function ChildA() {
  console.log("ChildA render...");
  return (
    <HomeContext.Consumer>
      {({ num, setNum }: HomeContextInterface) => (
        <>
          <div>ChildA</div>
          {num}
          <Button onClick={() => setNum(num + 1)}>click</Button>
        </>
      )}
    </HomeContext.Consumer>
  );
}

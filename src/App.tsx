/*
 * @Author       : Eug
 * @Date         : 2022-03-31 16:16:43
 * @LastEditTime : 2022-04-24 20:01:29
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-react/src/App.tsx
 */
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      app
      <h1 className="text-3xl font-bold underline">
        Hello!
      </h1>
      {count}
    </div>
  );
}

export default App;

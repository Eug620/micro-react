/*
 * @Author       : Eug
 * @Date         : 2022-03-31 16:16:43
 * @LastEditTime : 2022-04-11 15:25:24
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-react/src/App.tsx
 */
import { useState } from "react";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

// import * as React from 'react'

// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Home from "./views/home";
import About from "./views/about";
import Layout from './views/layout'
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* {BasicCard()} */}
      <Card sx={{ minWidth: 275, maxWidth: 500, margin: "90px auto" }}>
        <CardContent>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
            </Route>
          </Routes>
        </CardContent>
      </Card>
    </div>
  );
}


function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500, margin: "20px auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          welcome
        </Typography>
        <Typography variant="h5" component="div">
          <Link to={"/"}>home</Link>
          <Link to={"/about"}>about</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default App;

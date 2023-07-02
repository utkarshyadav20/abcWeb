import "./App.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
// import React,{ useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import "./style.scss";
import About from "./pages/about";
import Infrastructure from "./pages/infrastructure";
// import Mapsapi from "./mapsApi"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/aboutUs" element={<About/>}></Route>
          <Route path="/infra" element={<Infrastructure/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  // return(
  //   <BrowserRouter>
  //     <Infrastructure></Infrastructure>
  //   </BrowserRouter>
  // )
}

export default App;

// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Acura from "./components/Acura";
import Error404 from "./components/Error404";
import { MiNav } from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <MiNav title="Planificacion De Menus">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Acura />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </MiNav>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { useState } from "react";
import "./App.css";
import dataMenu from "./mocks/data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Acura from "./components/Acura";
import Error404 from "./components/Error404";
import m1 from "./img/1.webp";
import m5 from "./img/5.jpg";
import { MiNav } from "./components/Nav";

const reyes = [
  {
    nombre: "Bwm",
    color: "#155b7f",
    precio: 178,
    imagen: m1,
  },
  {
    nombre: "Acura",
    color: "#31512c",
    precio: 141,
    imagen: m5,
  },
];
function App() {
  console.log(dataMenu);

  return (
    <>
      <BrowserRouter>
        <MiNav title="Planificacion De Menus">
          <Routes>
            <Route path="/" element={<Home reyes={reyes} />} />
            <Route path="/menu" element={<Acura reyes={reyes} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </MiNav>
      </BrowserRouter>
    </>
  );
}

export default App;

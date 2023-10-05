import React, { FC } from "react";
import { NavLink } from "react-router-dom";
// import { useParams } from 'react-router-dom'

export interface Root {
  nombre: string;
  color: string;
  precio: number;
  imagen: string;
}
export interface ReyesProps {
  reyes: Root[];
}

const Acura: FC<ReyesProps> = ({ reyes }) => {
  // const dato = useParams()
  return (
    <div className="auto">
      {reyes.map((item) => (
        <>
          <img className="imagen" src={item.imagen} alt="" />
          <p>{item.nombre}</p>
        </>
      ))}
      <NavLink to="/">Regresar</NavLink>
    </div>
  );
};

export default Acura;

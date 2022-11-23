import React from 'react';
import { useState } from "react";

let num = 1;
const artList = [`El punto ${num} ha sido agreado`];

const Lista = () => {
  const [arreglo, setAreglo] = useState(artList);

  const agregrArt = () => {
    setAreglo([...arreglo, `El punto ${num +1} ha sido agreado`])
  }
  return (
    <>
    <ol>
      {artList.map(item => {
        return <li key={item}>{item}</li>
      })}
    </ol>
    <button onClick={agregrArt}>Agregar puntos</button>
    </>
  )
}

export default Lista
import React from 'react';
import "./ItemListContainer.css";

const ItemListContainer = ({mensaje, Color, bgColor}) => {

  const estilo = {
    backgroundColor: bgColor,
    color : Color
  }

  return (
    <div className='principal' style={estilo}>
      <p>{mensaje}</p>
    </div>
  )
}

export default ItemListContainer
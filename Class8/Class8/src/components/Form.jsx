import React from 'react'
import { useState } from 'react';

const Form = () => {
  const [userName, setUserName] = useState('');
  const onChangeUserName = (e) => setUserName(e.target.value);

    const valName = (userName) => {
        const wSpaces = userName.trim();
        return wSpaces.length > 2 ? true : false;
    }
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        const isValName = valName(userName);
          if (isValName) {
            alert('Datos corretos')
          } else {
              alert('HAy algún dato mal ingresado')
            }
          alert(`Bienvenido ${userName}`)
    }
  return (
    <>
    <form onSubmit={onSubmitForm}>
    <input type="text" value={userName} onChange={onChangeUserName} placeholder='Ingresa tu nombre...'/>
    <br />
    <input type="text" placeholder='Ingresa tu edad...'/>
    <br />
    <input type="text" placeholder='Nombre de tu Pokemón fav...'/>
    </form>
    </>
  )
}

export default Form
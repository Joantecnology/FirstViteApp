import React from 'react'

const Select = (props) => {
  return (
    <div className='caja'>
        <h1 className='country'>{props.country}</h1>
        <h2 className='text'>{props.city}</h2>
        <h2 className='text'>{props.population}</h2>
    </div>
    
  )
}

export default Select
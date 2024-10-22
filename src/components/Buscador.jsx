import React from 'react'

export const Buscador = ({handleOnSubmit, valorInput, onChangeInput}) => {
  return (
    <form className='form-buscador' onSubmit={handleOnSubmit}>
          <input className='buscador' value={valorInput} onChange={onChangeInput} /> 
    </form>   
  )
}


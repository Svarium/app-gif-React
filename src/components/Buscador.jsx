import React from 'react'

export const Buscador = ({handleOnSubmit, valorInput, onChangeInput}) => {
  return (
    <form onSubmit={handleOnSubmit}>
          <input value={valorInput} onChange={onChangeInput} /> 
    </form>   
  )
}

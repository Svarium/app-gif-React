import './Buscador.css';

function Buscador ({handleOnSubmit, valorInput, onChangeInput})  {
  return (
    <form className='form-buscador' onSubmit={handleOnSubmit}>
          <label htmlFor="">Busca tu Gif 🚀 </label>
          <input className='buscador' value={valorInput} onChange={onChangeInput} /> 
    </form>   
  )
}

export default Buscador;
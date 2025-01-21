import OneGif from '../OneGif'
import './GridGif.css';


function GridGifs ({gifs}) {
  return (
   <div className='contenedor-grid-gifs'>
     {
            gifs.map((gif, index) => (
             <OneGif
             gif={gif}
             key={gif.id}
             index={index}
             />
            ))
      } 
   </div>
  )
}

export default GridGifs;
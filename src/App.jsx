import {useState} from 'react';
import { Buscador } from './components/Buscador';
import { GridGifs } from './components/GridGifs';

function App() {
  //estado

  const [valorInput, setValorInput] = useState('');
 
  const [gifs, setGifs] = useState([]);

  const onChangeInput = (e) => {
    const valor = e.target.value;
    setValorInput(valor);  
  }

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=i5iG837ZWXZK02Sz0RCL17MTVQdNH5ri&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.data;
  }

  const handleOnSubmit = async(e) => {
    e.preventDefault()
    const gifs = await getGifs(valorInput)
    console.log(gifs);    
    setGifs(gifs)   
  } 

  //JSX
  return (
    <>
     <div>
       <Buscador 
       valorInput={valorInput}
       onChangeInput={onChangeInput}
       handleOnSubmit={handleOnSubmit}
       />
     
     <GridGifs 
     gifs={gifs}
     />
     </div>
    </>
  )
}

export default App

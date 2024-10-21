import {useState} from 'react';

function App() {
  //estado

  const [valorInput, setValorInput] = useState('');
 
  const [gif, setGif] = useState([]);

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
    setGif(gifs)   
  } 

  //JSX
  return (
    <>
     <div>
      <form onSubmit={handleOnSubmit}>
          <input value={valorInput} onChange={e => onChangeInput(e)} /> 
      </form>     
      {
        gif.map((gif) => (
          <img src={gif.images.original.url} key={gif.id} alt="gif" />
        ))
      } 
     </div>
    </>
  )
}

export default App

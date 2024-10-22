import {useState} from 'react';

export const useSearchGifs = () => {

    const [valorInput, setValorInput] = useState(''); 
    const [gifs, setGifs] = useState([]);
    const [cargando, setCargando] = useState(false)
    
    
    const onChangeInput = (e) => {
      const valor = e.target.value;
      setValorInput(valor);  
    }
  
    const getGifs = async (query) => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=i5iG837ZWXZK02Sz0RCL17MTVQdNH5ri&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      setCargando(true);
      await new Promise(resolve => { //función para hacer esperar unos segundos antes de cargarg los gifs
        setTimeout(() => {
            resolve(true)
        }, 1500)
      })
      const response = await fetch(url);
      const data = await response.json();
      setCargando(false);
      console.log(data);
      return data.data;
    }
  
    const handleOnSubmit = async(e) => {
      e.preventDefault()
      const gifs = await getGifs(valorInput)
      console.log(gifs);    
      setGifs(gifs)   
    } 
  

  return{
          valorInput,
          onChangeInput,
          handleOnSubmit,
          gifs,
          cargando  
  }
}

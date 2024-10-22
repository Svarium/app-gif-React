import React from 'react'
import {OneGif } from './OneGif';

export const GridGifs = ({gifs}) => {
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

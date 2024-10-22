import React from 'react'
import {OneGif } from './OneGif';

export const GridGifs = ({gifs}) => {
  return (
   <div className='contenedor-grid-gifs'>
     {
            gifs.map((gif) => (
             <OneGif
             gif={gif}
             key={gif.id}
             />
            ))
      } 
   </div>
  )
}

import React from 'react'
import {OneGif } from './OneGif';

export const GridGifs = ({gifs}) => {
  return (
   <>
     {
            gifs.map((gif) => (
             <OneGif
             gif={gif}
             key={gif.id}
             />
            ))
      } 
   </>
  )
}

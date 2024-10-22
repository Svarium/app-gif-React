import React from 'react';


export const OneGif = ({gif}) => {
  return (
    <img className='gif' src={gif.images.original.url} alt={gif.title} />
  )
}

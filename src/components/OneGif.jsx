import React from 'react';


export const OneGif = ({gif}) => {
  return (
    <img src={gif.images.original.url} alt={gif.title} />
  )
}

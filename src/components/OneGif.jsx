import {animate, delay, motion, useInView} from 'framer-motion';
import { filter } from 'framer-motion/client';
import { useRef } from 'react';

const variants = {
  inicial:{
    opacity: 0, scale:0.7
  },

  animate: ({index}) => ({
    opacity:1, scale:1, transition:  {   
      delay: index * .1
    }
   }
  )
}

export const OneGif = ({gif, index}) => {

  const ref = useRef(null) //crea una referencia a una parte del jsx para monitorearlo en tiempo real
  const estaVisto = useInView(ref, {once:true}) //se usa la referencia para trabajar la animación en particular

  return (
    <motion.img
    drag
    ref={ref} 
    initial="inicial"
    animate={estaVisto ? "animate" : ''}
    variants={variants}
    custom={{index}}
    style={{ filter: "grayscale(0) drop-shadow(0px 0px 0px rgba(0,0,0,0))" }}
    whileHover={{
      filter: "grayscale(1) drop-shadow(4px 4px 10px rgba(255,255,255,0.5)",      
    }}
    className='gif' 
    src={gif.images.original.url} 
    alt={gif.title} 
        />
  )
}

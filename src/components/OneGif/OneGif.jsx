import { motion, useInView } from 'framer-motion'; // Importa funcionalidades para animaciones y detección de visibilidad.
import { useRef } from 'react'; // Importa useRef para crear referencias a elementos DOM.
import './OneGif.css'; // Importa los estilos para el componente.

const variants = {
  // Variante inicial: el GIF comienza con opacidad 0 y un tamaño reducido.
  inicial: {
    opacity: 0,
    scale: 0.7,
  },

  // Variante animada: el GIF aparece con opacidad 1 y tamaño normal, 
  // con una transición que incluye un pequeño retraso basado en su índice.
  animate: ({ index }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1, // Incrementa el retraso progresivamente según el índice.
    },
  }),
};

/**
 * Componente para renderizar un GIF con animaciones.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.gif - Objeto que contiene los datos del GIF.
 * @param {number} props.index - Índice del GIF en la lista.
 */
function OneGif({ gif, index }) {
  // Crea una referencia para monitorear este elemento en tiempo real.
  const ref = useRef(null);

  // Determina si el elemento ha sido visto en la pantalla. 
  // La animación se ejecutará solo una vez (`once: true`).
  const estaVisto = useInView(ref, { once: true });

  return (
    <motion.img
      // Permite arrastrar el GIF (función de Framer Motion).
      drag
      // Asigna la referencia al elemento DOM.
      ref={ref}
      // Define la variante inicial de la animación.
      initial="inicial"
      // Aplica la animación solo si el GIF está visible.
      animate={estaVisto ? "animate" : ""}
      // Especifica las variantes definidas anteriormente.
      variants={variants}
      // Pasa datos personalizados a las variantes (en este caso, el índice).
      custom={{ index }}
      // Aplica un estilo inicial al GIF.
      style={{
        filter: "grayscale(0) drop-shadow(0px 0px 0px rgba(0,0,0,0))",
      }}
      // Define cómo cambia el estilo cuando el usuario pasa el mouse sobre el GIF.
      whileHover={{
        filter:
          "grayscale(1) drop-shadow(4px 4px 10px rgba(255,255,255,0.5))",
      }}
      // Aplica una clase CSS personalizada para estilos adicionales.
      className="gif"
      // Establece la URL de la imagen del GIF.
      src={gif.images.original.url}
      // Usa el título del GIF como texto alternativo para accesibilidad.
      alt={gif.title}
    />
  );
}

export default OneGif;

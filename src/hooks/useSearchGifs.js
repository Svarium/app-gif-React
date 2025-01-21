import { useState } from 'react';

// Este custom hook se utiliza para buscar y gestionar GIFs a través de la API de Giphy.
export const useSearchGifs = () => {

    // Estado para gestionar el valor del input del usuario.
    const [valorInput, setValorInput] = useState('');

    // Estado para almacenar los GIFs obtenidos de la API.
    const [gifs, setGifs] = useState([]);

    // Estado para indicar si la aplicación está cargando datos.
    const [cargando, setCargando] = useState(false);

    /**
     * Manejador para actualizar el estado del input con el valor ingresado por el usuario.
     * @param {Event} e - Evento generado por el input.
     */
    const onChangeInput = (e) => {
        const valor = e.target.value; // Obtiene el valor del input.
        setValorInput(valor);        // Actualiza el estado con el valor.
    };

    /**
     * Realiza una consulta a la API de Giphy para buscar GIFs basados en una palabra clave.
     * @param {string} query - Palabra clave para buscar GIFs.
     * @returns {Array} - Arreglo de GIFs obtenidos de la API.
     */
    const getGifs = async (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=i5iG837ZWXZK02Sz0RCL17MTVQdNH5ri&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

        // Indica que la aplicación está cargando.
        setCargando(true);

        // Simula un retraso de 1 segundo antes de hacer la solicitud.
        await new Promise((resolve) => {
            setTimeout(() => resolve(true), 1000);
        });

        // Realiza la solicitud a la API.
        const response = await fetch(url);
        const data = await response.json();

        // Finaliza la indicación de carga.
        setCargando(false);

        console.log(data); // Log para depuración.
        return data.data; // Devuelve el arreglo de GIFs.
    };

    /**
     * Manejador para gestionar el envío del formulario.
     * Busca GIFs basados en el valor actual del input y actualiza el estado con los resultados.
     * @param {Event} e - Evento de envío del formulario.
     */
    const handleOnSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario.

        // Llama a la función getGifs con el valor actual del input.
        const gifs = await getGifs(valorInput);

        console.log(gifs); // Log para depuración.

        // Actualiza el estado con los GIFs obtenidos.
        setGifs(gifs);
    };

    // Devuelve los estados y funciones necesarios para interactuar con el hook.
    return {
        valorInput,      // Valor actual del input.
        onChangeInput,   // Función para actualizar el valor del input.
        handleOnSubmit,  // Función para manejar el envío del formulario.
        gifs,            // GIFs obtenidos de la API.
        cargando,        // Indica si la aplicación está cargando datos.
    };
};

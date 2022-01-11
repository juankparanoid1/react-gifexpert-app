//los hooks inician con "use" en el nombre del
//archivo

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifts';

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    //con esto se ejecuta esa funcion cuando el componente carga por primera vez
    useEffect(() => { 
        getGifs(category)
            .then( images => {
                setstate({
                    data: images,
                    loading: false,
                })
            });
    }, [ category ]); //si la categoria cambia se agrega aqui para que 
    //mande a llamar de nuevo la funcion

    return state;

}
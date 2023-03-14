import axios from 'axios'

export const AGREGAR_PERSONAJE = "AGREGAR_PERSONAJE";
export const ELIMINAR_PERSONAJE = "ELIMINAR_PERSOANJE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const agregarPersonaje = (personaje) => {

    return function(dispatch) {
        axios
        .post("http://localhost:3001/rickandmorty/fav", personaje)
        .then(response => {
            return dispatch ({
                type: AGREGAR_PERSONAJE,
                payload: response.data
            })
        })
    }

}

export const eliminarPersonaje = (id) => {

    return function(dispatch) {
        axios
        .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        .then(response => {
            return dispatch({
                type: ELIMINAR_PERSONAJE,
                payload: response.data
            })
        })

    }
}

export const filterCards = (gender) => {

    return {

        type: FILTER,
        payload: gender
        

    }

}

export const orderCards = (id) => {

    return {
        type: ORDER,
        payload: id
    }

}



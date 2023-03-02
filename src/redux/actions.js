

export const AGREGAR_PERSONAJE = "AGREGAR_PERSONAJE";
export const ELIMINAR_PERSONAJE = "ELIMINAR_PERSOANJE";

export const agregarPersonaje = (id) => {

    return {
        type: AGREGAR_PERSONAJE,
        payload: id
    }
}

export const eliminarPersonaje = (id) => {

    return {
        type: ELIMINAR_PERSONAJE,
        payload: id
    }
}



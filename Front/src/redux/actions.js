import axios from 'axios'

export const AGREGAR_PERSONAJE = "AGREGAR_PERSONAJE";
export const ELIMINAR_PERSONAJE = "ELIMINAR_PERSOANJE";
export const GET_FAVORITES = 'GET_FAVORITES';
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const agregarPersonaje = (personaje) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("http://localhost:3001/rickandmorty/fav", personaje);
        dispatch({
          type: AGREGAR_PERSONAJE,
          payload: response.data
        });
      } catch (error) {
        console.log("Error al agregar personaje:", error);
      }
    };
  };


export const eliminarPersonaje = (id) => {

    return async(dispatch) => {

        try{
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
       
                dispatch({
                type: ELIMINAR_PERSONAJE,
                payload: response.data
            })
        }catch(error){
            console.log("Error al eliminar personaje:", error)
        }

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

export const getFavorites = () => {

    return async (dispatch) => {
        try {
          const response = await axios.get("http://localhost:3001/rickandmorty/fav");
          dispatch({
            type: GET_FAVORITES,
            payload: response.data
          });
        } catch (error) {
          console.log(error);
        }
      };

}



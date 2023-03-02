
import { AGREGAR_PERSONAJE } from "./actions"
import { ELIMINAR_PERSONAJE } from "./actions"
import { agregarPersonaje } from "./actions"
import { eliminarPersonaje } from "./actions"


const initialState = {

    myFavorites: []


}

export  const reducer = (state = initialState, {type, payload}) => {

    switch(type){

        case AGREGAR_PERSONAJE:
            return {

                ... state,

                myFavorites: [... state.myFavorites, payload]
            }

            case ELIMINAR_PERSONAJE:
                return{

                    ... state,
                    myFavorites: state.myFavorites.filter(personaje => personaje.id !== payload)
                }






            default:
            return {
                ... state
            }   
    }
}
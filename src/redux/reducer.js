
import { AGREGAR_PERSONAJE, FILTER, ORDER } from "./actions"
import { ELIMINAR_PERSONAJE } from "./actions"
import { agregarPersonaje } from "./actions"
import { eliminarPersonaje } from "./actions"



const initialState = {

    myFavorites: [],
    allCharacters: []


}

 const reducer = (state = initialState, {type, payload}) => {

    switch(type){

        case AGREGAR_PERSONAJE:
            return {

                ... state,

                myFavorites: [... state.allCharacters, payload],
                allCharacters: [... state.allCharacters, payload]
            }

            case ELIMINAR_PERSONAJE:
                return{

                    ... state,
                    myFavorites: state.myFavorites.filter(personaje => personaje.id !== payload)
                }


            case FILTER:
                return{

                    ... state,
                    myFavorites: state.allCharacters.filter(character => character.gender === payload )

                }


            case ORDER:

             const order = state.allCharacters.sort()


                return {

                    ... state,
                    myFavorites: order
                }

               

            default:
            return {
                ... state
            }   
    }
}


export default reducer;
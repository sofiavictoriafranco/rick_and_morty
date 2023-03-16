
import { AGREGAR_PERSONAJE, FILTER, GET_FAVORITES, ORDER } from "./actions"
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

                myFavorites: payload,
                allCharacters: payload
            }

            case ELIMINAR_PERSONAJE:
                return{

                    ... state,
                    myFavorites: payload
                }


            case FILTER:
                return{

                    ... state,
                    myFavorites: state.allCharacters.filter(character => character.gender === payload )

                }


                case ORDER:
                    
                    const sortedFavorites = [...state.myFavorites].sort((a, b) => {
                      if (payload === "Ascendente") {
                        return a.id - b.id;
                      } else {
                        return b.id - a.id;
                      }
                    });
                    return {
                      ... state,
                      myFavorites: sortedFavorites,
                    };

                    

                case GET_FAVORITES:

                    return{

                        ... state,
                        myFavorites: payload
                    }
    



               

            default:
            return {
                ... state
            }   
    }
}


export default reducer;
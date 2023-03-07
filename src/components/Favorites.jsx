import { connect } from "react-redux"
import Card from './Card'
import { useDispatch } from "react-redux"
import { filterCards, orderCards } from "../redux/actions";


export const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch(); 

    const handleClick = (event) => {

    const { name, value} = event.target;

    switch(name){
        case "order":
            return dispatch(orderCards(value))

        case "filter":
            return dispatch(filterCards(value))

    }





    }




    return (

    <div>



     <div>
        <select name="order" onChange={handleClick}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
            
        </select>


        <select name="filter" onChange={handleClick}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>
        </select>
     </div>



     { myFavorites?.map((character, index) => {
        <Card>

            id={character.id}
            name= {character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            key={index}
        </Card>
     })  }


    

    </div>


    )

}


const mapStateToProps = (state) => {

    return {
        myFavorites: state.myFavorites
    }

}







export default connect(
    mapStateToProps,
  null
) (Favorites);
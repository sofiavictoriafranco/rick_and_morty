import { connect } from "react-redux"
import Card from './Card'


const Favorites = ({myFavorites}) => {

    return (

    <div>

     { myFavorites.length? myFavorites.map((personaje) => {
        <Card>

         <h2>{personaje.name}</h2>
         <h2>{personaje.species}</h2>
         <h2>{personaje.gender}</h2>
         <img  src={personaje.image}  />

        </Card>
     }) : null }

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
import {Link} from 'react-router-dom'
import { agregarPersonaje } from '../redux/actions';
import { eliminarPersonaje } from '../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

export  function Card(props) {

   const [isFav, setIsFav] = useState(false);


   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);


   const handleFavorite = () => {

      if ( isFav){
         setIsFav(false);
         props.eliminarPersonaje(props.id)
      }else {
         setIsFav(true);
         props.agregarPersonaje(props)
      }
   }


   

   return (

   
      
      <div>

{
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         
         <button onClick={props.onClose}>X</button>

        
         
         <Link to={`/detail/${props.id}`} >
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image}  />
         </Link>
         
      </div>
   
      
   );
}


const mapDispatchToProps = (dispatch) => {

   return{

      agregarPersonaje: (personaje) => dispatch(agregarPersonaje(personaje)),

      eliminarPersonaje: (id) => dispatch(eliminarPersonaje(id))

   }
}


const mapStateToProps = (state) => {

   return {
      myFavorites: state.myFavorites
   }
}

export default connect ( 
   mapStateToProps,
   mapDispatchToProps

)(Card);

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Detail (props) {

    const {detailId} = useParams();

    const [character, setCharacter] = useState({});


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);


      return (

        <div> 

            <Link to='/Home'>

                <button>Home</button>


            </Link>

            <h1>Name: {character.name}</h1>
            <h2>Status:{character.status}</h2>
            <h2>Species:{character.species}</h2>
            <h2>Gender:{character.gender}</h2>
            {character.origin && <h2>{character.origin.name}</h2>}
            <img src={character.image} alt={character.name} />
         
         

            
         
           





        </div>
      )
}
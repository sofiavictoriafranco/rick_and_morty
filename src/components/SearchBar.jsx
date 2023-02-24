import { useState } from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");
   const handleChange= (event) => {

      const input = event.target.value;
      setCharacter(input);



   }

   return (
      <div>
          <input 
          type='search' 
          name="search"
          id="search"
          onChange={handleChange}
          />
         <button onClick={ () => props.onSearch(character)}>Agregar</button> 
      </div>
   );
}

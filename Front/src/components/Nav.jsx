import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props){

    return (

        <div>

         <SearchBar
          onSearch={props.onSearch} 
          />

          <Link to='/About'>
            <button>About</button>
            </Link>
            
          <Link to='/Home'>
            <button>Home</button>
            </Link>

            <Link to='/Favorite'>
              <button>Favorite</button>
            </Link>

        </div>
    )
}


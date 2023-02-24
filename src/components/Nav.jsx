import SearchBar from "./SearchBar";

export default function Nav(props){

    return (

        <div>

         <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
          />

        </div>
    )
}


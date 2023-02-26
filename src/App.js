import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'

function App () {


  const  [characters, setCharacters] = useState([]);

  


  const onSearch = (character) =>  {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }


  const onClose = (id) => {

    setCharacters( characters.filter(personaje => personaje.id !== id));

  


 }

    

  return (

    <div className='App' style={{ padding: '25px' }}>

     
<Nav onSearch={onSearch}/>
<Routes>

<Route path='/About' element={<About/>}/>
<Route path='/Home' element={<Cards
          characters={characters}
          onClose={onClose}
        
        />}/>

<Route path='/Detail/:detailId' element={<Detail/>}/>


</Routes>

  
    </div>
  )
}

export default App

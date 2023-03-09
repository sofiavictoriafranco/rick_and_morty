import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form/Form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Favorites from './components/Favorites'


function App () {

   const [access, setAccess] = useState(false);

   const username = "sofiavictoriafranco@hotmail.com"; 
   const password = "hola1234";
   const navigate = useNavigate();

  const login = (userData) => {

      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      }


   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


  const  [characters, setCharacters] = useState([]);

  


  const onSearch = (character) =>  {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
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

 const location = useLocation();

    

  return (

    <div className='App' style={{ padding: '25px' }}>

      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}

     

<Routes>

<Route path='/About' element={<About/>}/>
<Route path='/Home' element={<Cards
          characters={characters}
          onClose={onClose}
        
        />}/>

<Route path='/Detail/:detailId' element={<Detail/>}/>
<Route exact path='/' element={<Form login={login} />}/>
<Route path='/favorite' element= {<Favorites/>}/>


</Routes>

  
    </div>
  )
}

export default App

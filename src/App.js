import './App.css'
import Cards from './components/Cards.jsx'
import characters, { Rick } from './data.js'
import Nav from './components/Nav'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>

      <div>
        <Nav/>
          
       
      </div>
      
      <hr />
      <div>
        <Cards
          characters={characters}
          Rick={Rick}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App

import {Link} from 'react-router-dom'

export default function Card(props) {
   return (
      
      <div>
         
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

import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      
      <div>
         {

        characters.map(({name, species, gender, image }) => { 

         

            return <Card

            name= {name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert('Emulamos que se cierra la card') }
         
            
            
            
            />

        } )
        
        }

      <div>
        <Card
          name={props.Rick.name}
          species={props.Rick.species}
          gender={props.Rick.gender}
          image={props.Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>

         

      </div>

   )
}

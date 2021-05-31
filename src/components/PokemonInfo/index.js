import './styles.css';
import {useLocation} from 'react-router-dom'
const PokemonInfo = ({cards}) => {
    const currentLocation = useLocation().pathname;
    const pokemonId = currentLocation.slice(currentLocation.indexOf("pokemon/")+8)
    const pokemon = cards.find(x => x.id === pokemonId)

    return pokemon ? 
        (<div>
            hello

            <h1>{pokemon.name}</h1>
        </div>) : (<h1>
            No such pokemon
        </h1>)
    
        
}

export default PokemonInfo;
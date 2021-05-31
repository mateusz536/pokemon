import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import PokemonInfo from './components/PokemonInfo';



const axios = require('axios');


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards", {
    params: {
      'X-Api-Key': "957fcd4c-3a4f-4ba4-bee4-b1cdfab0503d"
    }
  }
    ).then(response => setCards(response.data.data));
    console.log(cards)
  },[cards])


  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Switch>
            <Route exact path="/">
              <CardList cards={cards}/> 
            </Route>
            <Route path="/pokemon/:id">
              <PokemonInfo cards={cards}/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

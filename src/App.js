import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState(cards);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <CardList cards={cards} setCards={setCards} />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonInfo cards={cards} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

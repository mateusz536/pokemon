import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import PokemonInfo from "./components/PokemonInfo";
import SearchBar from "./components/SearchBar";
import Favourites from "./components/Favourites";

function App() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SearchBar
              cards={cards}
              setFilteredCards={setFilteredCards}
              filteredCards={filteredCards}
            />
            <CardList
              cards={filteredCards}
              setCards={setCards}
              setFilteredCards={setFilteredCards}
              filteredCardsCount={filteredCards.length / 10}
            />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonInfo
              cards={cards}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          </Route>
          <Route path="/favourites">
            <Favourites favourites={favourites} setFavourites={setFavourites} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./styles.css";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';


const axios = require("axios");

const CardList = ({ cards, setCards }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards", {
        params: {
          "X-Api-Key": "957fcd4c-3a4f-4ba4-bee4-b1cdfab0503d",
        },
      })
      .then((response) => setCards(response.data.data));
  }, [cards, setCards]);

  const onPageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="containerList">
        <div className='searchbar'>
        <TextField id="standard-basic" label="Find pokemon" />
        </div>
      {cards
        .slice((currentPage - 1) * 10, currentPage * 10)
        .map((card, index) => (
          <Link to={`/pokemon/${card.id}`} className="link">
            <div key={index} className="row">
              <h2>{card.name}</h2>
              <img
                style={{ height: "33vh" }}
                src={card.images.small}
                alt=""
              ></img>
            </div>
          </Link>
        ))}
      <Pagination count={25} page={currentPage} onChange={onPageChange} />
    </div>
  );
};

export default CardList;

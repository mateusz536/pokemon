import { useState, useEffect } from "react";
import "./styles.css";
import Pagination from "@material-ui/lab/Pagination";
import SnackBar from "../Snackbar";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const axios = require("axios");

const CardList = ({
  cards,
  setCards,
  setFilteredCards,
  filteredCardsCount,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (cards.length === 0) {
      axios
        .get("https://api.pokemontcg.io/v2/cards", {
          params: {
            "X-Api-Key": "957fcd4c-3a4f-4ba4-bee4-b1cdfab0503d",
          },
        })
        .then((response) => {
          setCards(response.data.data);
          setFilteredCards(response.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [cards, setCards, setFilteredCards]);

  const onPageChange = (event, value) => {
    setCurrentPage(value);
  };

  return !isLoading ? (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div className="containerList">
        {cards.slice((currentPage - 1) * 10, currentPage * 10).map((card) => (
          <Link to={`/pokemon/${card.id}`} key={card.id} className="link">
            <div className="row">
              <h2>{card.name}</h2>
              <img
                style={{ height: "33vh" }}
                src={card.images.small}
                alt=""
              ></img>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        count={filteredCardsCount}
        page={currentPage}
        onChange={onPageChange}
      />
      <SnackBar
        open={isError}
        setOpen={setIsError}
        type="error"
        message="Oops something is wrong with the API"
      />
    </div>
  ) : (
    <CircularProgress />
  );
};

export default CardList;

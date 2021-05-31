import "./styles.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SnackBar from "../Snackbar";
import { useState } from "react";

const Favourites = ({ favourites, setFavourites }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (fa) => {
    setFavourites(favourites.filter((f) => f.id !== fa.id));
    setIsDeleted(true);
  };
  return (
    <div className="favouritesdiv">
      <h1 style={{ width: "100%", paddingLeft: "10vw" }}>Favourites</h1>
      {favourites.map((f, index) => (
        <div className="favrow" key={index}>
          <h2 style={{ width: "50px" }}>{f.name}</h2>
          <img src={f.images.small} style={{ height: "20vh" }} alt=""></img>
          <Link
            to={`/pokemon/${f.id}`}
            style={{ textDecoration: "None", margin: "auto 0 auto 0" }}
          >
            <Button variant="contained">Go to</Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            style={{ height: "5vh", margin: "auto 0 auto 0" }}
            onClick={() => handleDelete(f)}
          >
            Delete
          </Button>
        </div>
      ))}
      <SnackBar
        open={isDeleted}
        setOpen={setIsDeleted}
        message="Card deleted"
        type="success"
      />
    </div>
  );
};

export default Favourites;

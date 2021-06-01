import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "3px 26px 5px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: "10px",
  },
}));

const SearchBar = ({ cards, setFilteredCards, filteredCards }) => {
  const classes = useStyles();
  const [searchby, setSearchBy] = React.useState("Name");
  const [search, setSearch] = React.useState("");
  const handleChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const applyFilters = () => {
    if (search === "" || search === undefined) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((c) => {
          if (searchby === "Name") {
            return c.name.toLowerCase().includes(search.toLowerCase());
          } else if (searchby === "Type") {
            return c.types[0].toLowerCase().includes(search.toLowerCase());
          } else if (searchby === "Subtype") {
            return c.subtypes[0].toLowerCase().includes(search.toLowerCase());
          } else return false;
        })
      );
    }

    console.log(filteredCards);
  };

  return (
    <div style={{ width: "100%" }}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Search</InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          placeholder="Search"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">
          Search by
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={searchby}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value="Name">Name</option>
          <option value="Type">Type</option>
          <option value="Subtype">Subtype</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>
        <Button
          variant="contained"
          style={{ marginTop: "23px" }}
          onClick={applyFilters}
          size="small"
        >
          Apply filters
        </Button>
      </FormControl>
    </div>
  );
};

export default SearchBar;

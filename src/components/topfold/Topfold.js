import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SearchExpense } from "../../redux/actions/expenses";
import "./topfold.css";

const Topfold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    dispatch(SearchExpense(e.target.value));
  };
  //const back = "<";
  //const cross = "[x]";
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="search-bar">
            <input
              placeholder="search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="./add-expense">
            <div className="add-button">
              <i class="fi fi-sr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fi fi-sr-angle-double-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fi fi-sr-delete"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topfold;

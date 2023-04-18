import React, { useContext, useRef, useState } from "react";

import styled from "./SearchForm.module.css";
import { Context } from "../../store/ProviderMovie";

const SearchForm = ({ query, options }) => {
  const [searchOption, setSearchOption] = useState({
    genre: '',
    mediaType: '',
    language: '',
    year: '',
  })

  const inputRef = useRef();
  const { setSearch, setShowDetail } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryInput = inputRef.current.value;
    setShowDetail(false);

    // console.log(queryInput)
    if (queryInput.trim().length > 0) {
      query(queryInput);
      options(searchOption);
    }
  };

  const handleClose = () => {
    const queryInput = (inputRef.current.value = "");
    setShowDetail(false);
  };

  const handleChangeSelect = (e, name) => {
    const copyState = {...searchOption};
    copyState[name] = e.target.value;
    setSearchOption(copyState);
  }

  return (
    <div>
      <div className={styled.distence}></div>
      <form onSubmit={handleSubmit}>
        <div className={styled.input}>
          <input type="text" ref={inputRef} />
          <div className={styled.svg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
          </div>
        </div>

        <div className={styled.bottom}>
          <div className={styled.filter}>
            <h5>Filter:</h5>
            <select onChange={(e) => handleChangeSelect(e, 'genre')}>
              <option value='' selected>Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Animation">Animation</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Music">Music</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="TV Movie">TV Movie</option>
              <option value="Thriller">Thriller</option>
              <option value="War">War</option>
              <option value="Western">Western</option>
            </select>
            <select onChange={(e) => handleChangeSelect(e, 'mediaType')}>
              <option value='' defaultValue >Media Type</option>
              <option value="all">All</option>
              <option value="movie">Movie</option>
              <option value="tv">TV</option>
              <option value="person">Person</option>
            </select>
            <select onChange={(e) => handleChangeSelect(e, 'language')}>
              <option value=''>Language</option>
              <option value="en">English</option>
              <option value="ja">Japan</option>
              <option value="hi">Hindi</option>
            </select>
            <select onChange={(e) => handleChangeSelect(e, 'year')}>
              <option value=''>Year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
            </select>
          </div>
          <div className={styled.actions}>
            <button onClick={handleClose}>RESET</button>
            <button>SEARCH</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

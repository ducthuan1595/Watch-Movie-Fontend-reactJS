import React, { useEffect, useState, useContext } from "react";

import Navbar from '../UI/Navbar';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import MovieDetail from "../browse/components/MovieDetail ";
import { Context } from "../store/ProviderMovie";

import fetchAPI, { url } from "../store/API";

const Search = () => {
	const [searchMovie, setSearchMovie] = useState({});
	const [query, setQuery] = useState('');
  const [option, setOption] = useState({
    genre: '',
    mediaType: '',
    language: '',
    year: ''
  })

  const { showDetail } = useContext(Context);
  const requests = fetchAPI();

	// get query input search
	const queryInput = (query) => {
		setQuery(query)
	}

	useEffect(() => {
    const fetchMovie = async() => {
      try {
        const res = await fetch(`${url}${requests.fetchSearch}&query=${query}&genre=${option.genre}&media_type=${option.mediaType}&language=${option.language}&year=${option.year}`);
        const data = await res.json();
        // console.log('data-search', data)
        // check and set api
        if(data.results.message === 'ok') {
          setSearchMovie(data.results.result)
        }
      }catch(e) {
        console.log(e.message)
      }
    };
    fetchMovie()
  }, [query, option])

  const searchOption = (option) => {
    setOption(option)
  }

  // console.log('search', searchMovie)
	return (
		<div style={{backgroundColor: '#000', height: '100vh'}}>
			<Navbar />
			<SearchForm query={queryInput} options={searchOption}/>
      <h3 style={{display: 'block', color: '#fff', margin: '20px 14px'}}>Search Result</h3>
			<ResultList resultSearch={searchMovie} />
      {showDetail && <MovieDetail />}
		</div>
	);
};

export default Search;

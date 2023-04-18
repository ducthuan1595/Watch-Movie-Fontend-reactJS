/////////////////////////////////////////////
import React, { useContext, useEffect, useState } from "react";

import fetchAPI, { url, genreList, API_KEY } from "../../store/API";
import styled from "./MovieList.module.css";
import MovieDetail from "./MovieDetail ";
import { Context } from "../../store/ProviderMovie";

import OriginMovie from "./listItem/OriginMovie";
import TopRateMovie from "./listItem/TopRateMovie";
import ActionMovie from "./listItem/ActionMovie";
import ComedyMovie from "./listItem/ComedyMovie";
import HorrorMovie from "./listItem/HorrorMovie";
import RomanceMovie from "./listItem/RomanceMovie";
import DocMovie from "./listItem/DocMovie";
import Adventure from "./listItem/AdventureMovie";
import AnimationMovie from "./listItem/AnimationMovie";
import CrimeMovie from "./listItem/CrimeMovie";
import DramaMovie from "./listItem/DramaMovie";
import FamilyMovie from "./listItem/FamilyMovie";
import FantasyMovie from "./listItem/FantasyMovie";
import HistoryMovie from "./listItem/HistoryMovie";
import MusicMovie from "./listItem/MusicMovie";
import MysteryMovie from "./listItem/MysteryMovie";
import ScienceFiction from "./listItem/ScienceFictionMovie";
import ThrillerMovie from "./listItem/ThrillerMovie";
import TVMovie from "./listItem/TVMovie";
import WarMovie from "./listItem/WarMovie";
import WesternMovie from "./listItem/WesternMovie";

const MovieList = () => {
  const [movieData, setMovieData] = useState({
    fetchTrending: {},
    fetchTopRated: {},
  });
  const [fetchOrigin, setFetchOrigin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showDetail } = useContext(Context);

  const requests = fetchAPI();

  // fetch Api
  const fetchMovie = async () => {
    try {
      const res = await fetch(`${url}${requests.fetchTrending}`);
      const res1 = await fetch(`${url}${requests.fetchTopRated}`);
      const data = await res.json();
      const data1 = await res1.json();
      if(data && data1) {
        setMovieData({
          fetchTrending: data,
          fetchTopRated: data1,
        });
      setIsLoading(false);
      }

      let movieList = []
      for(let key in genreList) {
        const res2 = await fetch(`${url}/discover/${genreList[key].id}?api_key=${API_KEY}&page=2`);
        const data2 = await res2.json();
        if(data2) {
          movieList.push({movie: data2, name: genreList[key].name})
        }
      }
      // console.log('movies', movieList)
      setFetchOrigin(movieList);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(()=> {
    fetchMovie();
  }, [])
  // return <></>;
  // render origin movie
  let fetchNetflixOriginalsCtx;
  if (Object.keys(movieData.fetchTrending).length !== 0) {
    const movieItem = movieData.fetchTrending.results.result.filter(
      (item) => item.poster_path !== null
    );
    if (movieItem) {
      fetchNetflixOriginalsCtx = (
        <div className={styled.origin}>
          <OriginMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render top rate movie
  let fetchTopRatedCtx;
  if (Object.keys(movieData.fetchTopRated).length !== 0) {
    const movieItem = movieData.fetchTopRated.results.result.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchTopRatedCtx = (
        <div className={styled["list-movie"]}>
          <TopRateMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render action movie
  let fetchActionMoviesCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Action'
    );
    if (movieItem) {
      fetchActionMoviesCtx = (
        <div className={styled["list-movie"]}>
          <ActionMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchComedyMoviesCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Comedy'
    );

    if (movieItem) {
      fetchComedyMoviesCtx = (
        <div className={styled["list-movie"]}>
          <ComedyMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchHorrorMoviesCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Horror'
    );
    if (movieItem) {
      fetchHorrorMoviesCtx = (
        <div className={styled["list-movie"]}>
          <HorrorMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchRomanceMoviesCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Romance'
    );
    if (movieItem) {
      fetchRomanceMoviesCtx = (
        <div className={styled["list-movie"]}>
          <RomanceMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchDocumentariesCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Documentary'
    );
    if (movieItem) {
      fetchDocumentariesCtx = (
        <div className={styled["list-movie"]}>
          <DocMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchAdventureCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Adventure'
    );
    if (movieItem) {
      fetchAdventureCtx = (
        <div className={styled["list-movie"]}>
          <Adventure movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchAnimationCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Animation'
    );
    if (movieItem) {
      fetchAnimationCtx = (
        <div className={styled["list-movie"]}>
          <AnimationMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchCrimeCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Crime'
    );
    if (movieItem) {
      fetchCrimeCtx = (
        <div className={styled["list-movie"]}>
          <CrimeMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchDramaCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Drama'
    );
    if (movieItem) {
      fetchDramaCtx = (
        <div className={styled["list-movie"]}>
          <DramaMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchFamilyCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Family'
    );
    if (movieItem) {
      fetchFamilyCtx = (
        <div className={styled["list-movie"]}>
          <FamilyMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchFantasyCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Fantasy'
    );
    if (movieItem) {
      fetchFantasyCtx = (
        <div className={styled["list-movie"]}>
          <FantasyMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchHistoryCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'History'
    );
    if (movieItem) {
      fetchHistoryCtx = (
        <div className={styled["list-movie"]}>
          <HistoryMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchMusicCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Music'
    );
    if (movieItem) {
      fetchMusicCtx = (
        <div className={styled["list-movie"]}>
          <MusicMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchMysteryCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Mystery'
    );
    if (movieItem) {
      fetchMysteryCtx = (
        <div className={styled["list-movie"]}>
          <MysteryMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchFictionCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Science Fiction'
    );
    if (movieItem) {
      fetchFictionCtx = (
        <div className={styled["list-movie"]}>
          <ScienceFiction movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

   // render comedy movie
  //  let fetchTVCtx;
  //  if (Object.keys(fetchOrigin).length !== 0) {
  //    const movieItem = fetchOrigin.filter(
  //      (item) => item.name === 'TV Movie'
  //    );
  //    if (movieItem) {
  //     fetchTVCtx = (
  //        <div className={styled["list-movie"]}>
  //          <TVMovie movieItem={movieItem[0].movie.results.result} />
  //        </div>
  //      );
  //    }
  //  }

    // render comedy movie
  let fetchThrillerCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Thriller'
    );
    if (movieItem) {
      fetchThrillerCtx = (
        <div className={styled["list-movie"]}>
          <ThrillerMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

   // render comedy movie
   let fetchWarCtx;
   if (Object.keys(fetchOrigin).length !== 0) {
     const movieItem = fetchOrigin.filter(
       (item) => item.name === 'War'
     );
     if (movieItem) {
      fetchWarCtx = (
         <div className={styled["list-movie"]}>
           <WarMovie movieItem={movieItem[0].movie.results.result} />
         </div>
       );
     }
   }

    // render comedy movie
  let fetchWesternCtx;
  if (Object.keys(fetchOrigin).length !== 0) {
    const movieItem = fetchOrigin.filter(
      (item) => item.name === 'Western'
    );
    if (movieItem) {
      fetchWesternCtx = (
        <div className={styled["list-movie"]}>
          <WesternMovie movieItem={movieItem[0].movie.results.result} />
        </div>
      );
    }
  }

  return (
    <>
      {isLoading && (
        <div className={styled.loading}>
          <p>Loading...</p>
        </div>
      )}
      {!isLoading && (
        <>
        <div className={styled["movies-list"]}>
          {fetchNetflixOriginalsCtx}
          {fetchTopRatedCtx}
          {fetchActionMoviesCtx}
          {fetchComedyMoviesCtx}
          {fetchHorrorMoviesCtx}
          {fetchRomanceMoviesCtx}
          {fetchDocumentariesCtx}
          {fetchAdventureCtx}
          {fetchAnimationCtx}
          {fetchCrimeCtx}
          {fetchDramaCtx}
          {fetchFamilyCtx}
          {fetchFantasyCtx}
          {fetchHistoryCtx}
          {fetchMusicCtx}
          {fetchMysteryCtx}
          {fetchFictionCtx}
          {/* {fetchTVCtx} */}
          {fetchThrillerCtx}
          {fetchWarCtx}
          {fetchWesternCtx}
        </div>
        {showDetail && <MovieDetail />}
        </>
      )}
    </>
  );
};

export default MovieList;

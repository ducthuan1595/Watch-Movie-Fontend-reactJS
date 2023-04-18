///////////////////////////////////////////

// https://api.themoviedb.org/3/movie/550?api_key=012caa0c0ae0d8eed438d22e0651f73d
export const url = 'http://localhost:5000/api/movies';
export const API_KEY = "8qlOkxz4wq" || "RYoOcWM4JW";

export const genreList = [{
  "id": 28,
  "name": "Action"
},
{
  "id": 12,
  "name": "Adventure"
},
{
  "id": 16,
  "name": "Animation"
},
{
  "id": 35,
  "name": "Comedy"
},
{
  "id": 80,
  "name": "Crime"
},
{
  "id": 99,
  "name": "Documentary"
},
{
  "id": 18,
  "name": "Drama"
},
{
  "id": 10751,
  "name": "Family"
},
{
  "id": 14,
  "name": "Fantasy"
},
{
  "id": 36,
  "name": "History"
},
{
  "id": 27,
  "name": "Horror"
},
{
  "id": 10402,
  "name": "Music"
},
{
  "id": 9648,
  "name": "Mystery"
},
{
  "id": 10749,
  "name": "Romance"
},
{
  "id": 878,
  "name": "Science Fiction"
},
{
  "id": 10770,
  "name": "TV Movie"
},
{
  "id": 53,
  "name": "Thriller"
},
{
  "id": 10752,
  "name": "War"
},
{
  "id": 37,
  "name": "Western"
}
]


function fetchAPI () {
  const API_KEY = "8qlOkxz4wq" || "RYoOcWM4JW";

  const requests = {
    fetchTrending: `/trending?api_key=${API_KEY}`,
    fetchTopRated: `/top-rate?api_key=${API_KEY}`,

    // fetchNetflixOriginals: `/discover/${topic.id}/?api_key=${API_KEY}&name=${topic.name}`,

    fetchSearch: `/search?api_key=${API_KEY}`,
  };

  return requests;
};

export default fetchAPI;

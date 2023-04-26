const api_key = "ab9085007ba85b6bbcec15fe0f2702e2";

const requests ={
    fetchTrending :`trending/all/week?api_key=${api_key}`,
    fetchNetflixoriginal :`discover/tv?api_key=${api_key}&language=en-US`,
    fetchTopRated :`movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${api_key}&with_genres=27`,
    fetchDocumentaries: `discover/movie?api_key=${api_key}&with_genres=99`,
    fetchRomanceMovies: `discover/movie?api_key=${api_key}&with_genres=10749`
}

export default requests;
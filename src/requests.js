const request = {
    fetchTrending: `trending/all/week?api_key=${process.env.REACT_APP_API}`,
    topRated: `movie/top_rated?api_key=${process.env.REACT_APP_API}`,
    upcoming: `movie/upcoming?api_key=${process.env.REACT_APP_API}`,
    horror: `movie/upcoming?api_key=${process.env.REACT_APP_API}&with_genres=27`
}

export default request
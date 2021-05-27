import { useState } from 'react';
import style from './style.module.scss';
const Search = () => {
    const [search, setSearch] = useState([]);
    // const [term, setTerm] = useState("");
    // const [debouncedTerm, setDebouncedTerm] = useState(term);
    const handleChange = (event) => {
        const { value } = event.target
        fetch(`${process.env.REACT_APP_SITE}search/movie?&api_key=${process.env.REACT_APP_API}&query=${value}`)
            .then(res => res.json())
            .then(json => setSearch(json.results))
    }
    return (
        <>
            <div className={style.search_wrap}>
                <form className={style.search}>
                    <input className={style.search_input} list="list-values" type="text"
                        aria-label="Search Movie Here"
                        placeholder="Search Movie"
                        onChange={handleChange}
                    />



                    <button className={style.search_btn}>
                        Submit
        </button>
                </form>

                {
                    search?.length > 0 &&
                    <div className={style.search_result}>
                        {search?.map((el) => <div key={el.title} className={style.search_result_item}>
                            <img src={`https://image.tmdb.org/t/p/w200${el.poster_path}`} />
                            <div className={style.search_result_desc}>
                                <span>
                                    <b>Title: </b>{el.title}
                                </span>
                                <span>
                                    <b>Orignal Title: </b>{el.original_title}
                                </span>
                            </div>
                        </div>)}

                    </div>
                }
            </div>
        </>
    )
}

export default Search

// From Vishal Urankar to Everyone:  05:16 PM
// const [term, setTerm] = useState("");
//   const [debouncedTerm, setDebouncedTerm] = useState(term);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setDebouncedTerm(term);
//     }, 1000);

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [term]);

//   useEffect(() => {
//     const searchMovie = async () => {
//       const { data } = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?api_key=c63ca5b4e5b9c3e16196fe8cf70e8262&language=en-US&query=${debouncedTerm}&page=1`
//       );

//       setSearchResults(data.results);
//     };

//     if (debouncedTerm) {
//       searchMovie();
//     }
//   }, [debouncedTerm]);

//   const signOut = () => {
//     auth.signOut().then(() => {
//       dispatch(logout());
//     });
//   };

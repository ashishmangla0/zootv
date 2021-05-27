import { useEffect, useState } from 'react';
import style from './style.module.scss';
const Search = () => {
    const [search, setSearch] = useState([]);
    const [term, setTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const searchData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SITE}search/movie?&api_key=${process.env.REACT_APP_API}&query=${debouncedTerm}`);
        const data = await response.json();
        setSearch(data.results);
    }
    useEffect(() => {
        if (debouncedTerm) {
            searchData()
        }
    }, [debouncedTerm]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [term]);
    return (
        <>
            <div className={style.search_wrap}>
                <form className={style.search}>
                    <input className={style.search_input} list="list-values" type="text"
                        aria-label="Search Movie Here"
                        placeholder="Search Movie"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button className={style.search_btn} type="button">
                        Search
                    </button>
                </form>
                {term}
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
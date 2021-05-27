import { useState } from 'react';
import style from './style.module.scss';
const Search: React.FC = () => {
    const [search, setSearch] = useState();
    const handleChange = (event) => {
        const { value } = event.target
        console.log(value);
        fetch(`${process.env.REACT_APP_SITE}discover/movie?&api_key=${process.env.REACT_APP_API}&query=${value}`)
            .then(res => res.json())
            .then(json => setSearch(json.results))
    }
    return (
        <>
        <form className={style.search}>
            <input type="text" className={style.search_input} onChange={handleChange} />
            <button className={style.search_btn}>
                Submit
        </button>
        </form>
       {/* {search?.length > 0 && <div></div>

       } */}
        </>
    )
}

export default Search
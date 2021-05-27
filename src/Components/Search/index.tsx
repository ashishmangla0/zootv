import style from './style.module.scss';
const Search : React.FC = () =>{
return(
    <form className={style.search}>
        <input type="text" className={style.search_input} />
        <button className={style.search_btn}>
            Submit
        </button>
    </form>
)
}

export default Search
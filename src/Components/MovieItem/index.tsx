type propsMovieItem ={
    title:string,
    className ?: string
}
const MovieItem : React.FC<propsMovieItem> = ({title,className}) =>{
return(
    <article className={className ? className :''}>
{title}
    </article>
)
}


export default MovieItem
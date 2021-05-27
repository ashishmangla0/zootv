import Heading from "../../Elements/Heading"

type propsMovieItem = {
    title : string,
    className ?: string,
    imgpath: string

}
const MovieItem: React.FC<propsMovieItem> = ({ title, className,imgpath }) => {
    return (
        <article className={className ? className : ''}>
            <Heading level={3} title={title} className={"asd"} />
            <img src={imgpath} />
        </article>
    )
}


export default MovieItem
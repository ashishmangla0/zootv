import Heading from "../../Elements/Heading"
import style from './style.module.scss';
type propsMovieItem = {
    title : string,
    className ?: string,
    imgpath: string,
    overview: string

}
const MovieItem: React.FC<propsMovieItem> = ({ title, className,imgpath,overview }) => {
    return (
        <article className={`${style.movieitem} ${className ? className : ''}`}>
            <img loading="lazy" src={imgpath} className={style.movieitem_img} />
            <div className={style.movieitem_textwrap}>
                <div className={"asd"}>
                    <Heading level={3} title={title} className={style.movieitem_title} />
                    <Heading level={4} title={overview} className={style.movieitem_overview} />
                </div>

            </div>


        </article>
    )
}


export default MovieItem
import { useEffect, useState } from "react";
import MovieItem from "../MovieItem";
import Slider from "react-slick";
// type propsMovieList = {
//     title : string,
//     fetchUrl : string
// }
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}
const MovieList = ({ title, fetchUrl }) => {
    const [movieList, setMovieList] = useState([]);
    const loadData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SITE}${fetchUrl}`);
        const data = await response.json();
        setMovieList(data.results);
        console.log(data.results);
    }
    useEffect(() => {
        loadData();
    }, []);
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <h2 className={"style.block"}>
                {title}
            </h2>
            <Slider {...settings}>
                {movieList.map((movie) =>
                    <MovieItem
                        title={movie.title}
                        imgpath={`${process.env.REACT_APP_IMGPATH}w400${movie.backdrop_path}`}
                        overview={movie.overview}
                    />
                )}
            </Slider>

        </>
    )
}

export default MovieList
import Hero from "../../Components/Hero";
import MovieList from "../../Components/MovieList";
import Container from "../../Elements/Container";
import requests from '../../requests';
const Home = () => {
    return (
        <>
        <Hero>
            wrwerwerwe rwe
            </Hero>
            <section>
                <Container>
                    <MovieList title="Up Coming" fetchUrl={requests.upcoming} />
                </Container>
            </section>
            <section>
                <Container>
                    <MovieList title="Top Rated" fetchUrl={requests.topRated} />
                </Container>
            </section>
            <section>
                <Container>
                    <MovieList title="Trending" fetchUrl={requests.fetchTrending} />
                </Container>
            </section>
            <section>
                <Container>
                    <MovieList title="Horror" fetchUrl={requests.horror} />
                </Container>
            </section>
            <section>
                <Container>
                    <MovieList title="Trending" fetchUrl={requests.fetchTrending} />
                </Container>
            </section>
        </>

    )
}
export default Home
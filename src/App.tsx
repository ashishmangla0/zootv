import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import MovieList from './Components/MovieList';
import requests from './requests';
import Home from './Home';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes/>
        <Home/>

          
        {/* <MovieItem title= {"asfdsdf"}/> */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;

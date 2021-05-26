import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Terms from './Terms';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieItem from './Components/MovieItem';
import Routes from './routes';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes/>
        {process.env.REACT_APP_API}
        <MovieItem title= {"asfdsdf"}/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

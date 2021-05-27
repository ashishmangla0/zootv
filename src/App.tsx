import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </Router>
  );
}
export default App;

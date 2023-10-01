import './App.css';
import './components/Styles.css';
import HomePage from './HomePage';
import ListCar from './components/ListCar';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />

      <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/listcar' element={<ListCar />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import './components/Styles.css';
import HomePage from './HomePage';
import ListCar from './components/ListCar';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/listcar' element={<ListCar />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from "../Catalog/Catalog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroImage from "../HeroImage/HeroImage";
import AboutUs from '../AboutUS/AboutUs';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css'

function App() {
  return (
    <Router>
      <div className={ styles.app }>
        <Header />
        <Routes>
            <Route exact path='/' element={
                <>
                  <HeroImage />
                  <Catalog />
                </> } />
            <Route path='/aboutUs' element={ <AboutUs /> } />
            <Route path='/contacts' element={ <Contacts /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

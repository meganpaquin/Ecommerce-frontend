
import Footer from './components/footer';
import Catalog from './components/catalog';
import ShoppingList from './components/shoppingList';
import Admin from './components/admin';
import AboutMe from './components/aboutMe';
import NavBar from './components/navBar';
import Home from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/list" element={<ShoppingList />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;

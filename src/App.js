
import Footer from './components/footer';
import Catalog from './components/catalog';
import ShoppingList from './components/shoppingList';
import Admin from './components/admin';
import AboutMe from './components/aboutMe';
import NavBar from './components/navBar';
import Home from './components/home';
import GlobalState from './store/globalState';
import Cart from './components/cart'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <GlobalState> 
        {/* this is a custom wrapper tag we made in store*/}
      <BrowserRouter>
        <NavBar></NavBar> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/list" element={<ShoppingList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer></Footer>

      </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;

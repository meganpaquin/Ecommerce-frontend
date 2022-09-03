import "./navBar.css";
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import StoreContext from "../store/storeContext";
import Login from "./login"

const NavBar = () => {

  const cart = useContext(StoreContext).cart

  const getNumItems = () => {
    let sum=0;
    
    for(let i=0; i < cart.length; i++){
      let item = cart[i];
      sum += item.quantity;
    }

    return sum;
  }

  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
         
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/catalog">
                Store
              </Link>
              <Link className="nav-link" to="/list">
                MyList
              </Link>
              <Link className="nav-link disabled" to='/admin'>Admin</Link>
            </div>
          </div>
        
        <form className="d-flex" role="search">
            <Login></Login>
            <Link className="btn btn-outline-success" type="submit" to="/cart">{getNumItems()} Cart
            </Link>
        </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

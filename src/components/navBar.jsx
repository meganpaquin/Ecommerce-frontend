import "./navBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
         
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <a className="nav-link active" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/catalog">
                Store
              </a>
              <a className="nav-link" href="/list">
                MyList
              </a>
              <a className="nav-link disabled" href='/admin'>Admin</a>
            </div>
          </div>
        
        <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">Cart</button>
        </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

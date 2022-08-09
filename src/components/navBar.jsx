import './navBar.css'

const NavBar = (inputs) => {
    return (
        <div className = 'navBar'>
            <li>{inputs.data}</li>
        </div>
    );
}

export default NavBar;
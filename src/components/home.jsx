import './home.css'
import {Link} from 'react-router-dom';

const Home = () => {

    return(
        <div className='home'>
            <h1>Market Store!</h1>
            <h4>Supplies for any craft project</h4>
            
            <div className='container'>
                <button><Link to='/catalog'>See Our Products</Link></button>
            </div>
        </div>
    );
}

export default Home;
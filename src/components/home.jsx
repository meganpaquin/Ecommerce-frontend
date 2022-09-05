import './home.css'
import {Link} from 'react-router-dom';

const Home = () => {

    return(
        <div className='home'>
                <div className="container">
                <h1>Market Store!</h1>
                <h4>Supplies for any craft project</h4>
                
                <div>
                    <button><Link to='/catalog'>See Our Products</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Home;
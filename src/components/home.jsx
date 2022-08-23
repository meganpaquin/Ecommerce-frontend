import './home.css'

const Home = () => {

    return(
        <div className='home'>
            <h1>Market Store!</h1>
            <h4>Supplies for any craft project</h4>
            
            <div className='container'>
                <button><a href='/catalog'>See Our Products</a></button>
            </div>
        </div>
    );
}

export default Home;
import './aboutMe.css'
import Carosel from './carosel.jsx'

const AboutMe = () => {
    
    
    return(
        <div className='aboutme'>
            <h3>Let us help you build your project</h3>
            
            <div className='content'>
                <h5>Shop By Category</h5>
                <Carosel></Carosel>
            </div>
        </div>
    );
}

export default AboutMe;
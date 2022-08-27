import './aboutMe.css'
import { useState } from 'react'

const AboutMe = () => {
    
    const [name, setName] = useState('');

    const toggleName = () => {
        setName('Megan Paquin');
    }

    return(
        <div className='aboutme'>
            <h3>Let us help you build your project</h3>
            
            <div className='content'>
                <h5>Shop By Category</h5>
            </div>
        </div>
    );
}

export default AboutMe;
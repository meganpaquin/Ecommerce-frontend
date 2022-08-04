import './aboutMe.css'
import { useState } from 'react'

const AboutMe = () => {
    
    const [name, setName] = useState('');

    const toggleName = () => {
        setName('Megan Paquin');
    }

    return(
        <div className='aboutme'>
            <h3>Hi my name is:</h3>
            <span>{name}</span>
            <button onClick={toggleName}>Show Name:</button>
        </div>
    );
}

export default AboutMe;
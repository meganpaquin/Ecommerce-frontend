import './categories.css'
import { useState } from 'react';

const Categories = (inputs) => {
    const [name, setName] = useState("");

    const clickme = () => {
        setName(inputs.data);
        inputs.onClick(name);
    }
    
    return (
        <div className = 'categories'>
                <li className="nav-link" onClick={clickme}>{inputs.data}</li>  
        </div>
    );
}

export default Categories;
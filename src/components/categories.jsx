import './categories.css'
import { useState } from 'react';

const Categories = (inputs) => {

    const clickme = () => {
        if(inputs.data){
            inputs.onClick(inputs.data);
        }else{
            console.log("No Category Found");
        }  
    }
    
    return (
        <div className = 'categories'>
                <li className="nav-link" onClick={clickme}>{inputs.data}</li>  
        </div>
    );
}

export default Categories;
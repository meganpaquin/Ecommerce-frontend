import "./shoppingList.css";
import { useState } from 'react'

const ShoppingList = () => {
    //this will be a todo component
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    

    const printNow = () => {
        console.log('working');  
        items.push(text);
    };

    const textChange = (arg) => {
        //you must save the value every time it changes, there is no way to onClick directly from the button
        let value = arg.target.value;
        setText(value);
    };

    return(
       //enter stuff here 
       <div className='shoppinglist'>
        <h3>Your Shopping List</h3>            
            <label>Add to List</label>
            <input onChange={textChange} type="text" />
            <button onClick={printNow}>Add</button>
        <ul>
            {items.map((item) =>
            (
            <li key={item}>{item}</li>
            ))}
        </ul>
       </div>
    );
}

export default ShoppingList
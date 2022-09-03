import './categories.css'

const Categories = (inputs) => {

    
    return (
        <div className = 'categories'>
                <li className="nav-link" >{inputs.data}</li>  
        </div>
    );
}

export default Categories;
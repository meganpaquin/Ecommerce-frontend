import './Catalog.css';
import Product from './Product';
import { useEffect } from 'react';
    //works like window.onload
import DataService from '../services/dataService';
import { useState } from 'react';
import NavBar from './navBar';

let i;

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadData = () => {
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);

        let uniques = [];
        for (i = 0; i < data.length; i++) {
            let each = data[i];
            if(!uniques.includes(each.category)){
                uniques.push(each.category);
                //does the category exist in the array already? If not then add it
            }
        }
        setCategories(uniques);
    };

    useEffect(() => {
        loadData();
    }, []);

    return(
        <div className='catalog'>
            

            <div className='categories'>
                {categories.map((d) =>
                (
                    <NavBar key={d} data={d}></NavBar>
                ))}
            </div>

            <div className='inventory'>
                { products.map((d) => 
                (<Product key={d._id} data={d}></Product>))}
            </div>
        </div>
    )
}

export default Catalog;